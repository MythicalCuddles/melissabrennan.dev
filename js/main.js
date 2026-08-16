// melissabrennan.dev - portfolio renderer

document.addEventListener('DOMContentLoaded', async () => {
    try {
        renderSocialLinks();
        renderPortfolio();
        hideJsWarning();
        await renderGithubProjects();
    } catch (error) {
        console.error('Failed to render portfolio content.', error);
        showJsWarning();
    }
});

async function renderGithubProjects() {
    const contentRoot = document.querySelector('[data-portfolio]');
    const config = typeof portfolioData !== 'undefined' ? portfolioData.github : null;
    if (!contentRoot || !config || !config.username) return;

    const categoryNode = cloneTemplate('category-template');
    const heading = categoryNode.querySelector('.sectionHeading');
    const tileContainer = categoryNode.querySelector('.tileContainer');
    heading.textContent = config.categoryTitle;

    const introduction = document.createElement('p');
    introduction.classList.add('categoryIntroduction');
    introduction.textContent = config.description;
    heading.after(introduction);

    const status = document.createElement('p');
    status.classList.add('githubStatus');
    status.textContent = 'Loading public projects from GitHub…';
    tileContainer.appendChild(status);
    contentRoot.appendChild(categoryNode);

    try {
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(config.username)}/repos?per_page=100&sort=pushed`, {
            headers: { Accept: 'application/vnd.github+json' }
        });
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

        const repositories = await response.json();
        const featuredUrls = getFeaturedGithubUrls();
        const projects = repositories
            .filter((repository) => !repository.archived && !featuredUrls.has(normalizeUrl(repository.html_url)))
            .map(githubRepositoryToProject);

        status.remove();
        if (projects.length === 0) {
            tileContainer.appendChild(buildGithubFallback(config.username, 'All of my public projects are already featured above.'));
            return;
        }

        projects.forEach((project) => tileContainer.appendChild(buildTile(project)));
    } catch (error) {
        console.warn('Could not load GitHub projects.', error);
        status.replaceWith(buildGithubFallback(config.username, 'GitHub projects could not be loaded right now.'));
    }
}

function githubRepositoryToProject(repository) {
    const links = [{ type: 'link', text: 'Source Code', url: repository.html_url, icon: 'fab fa-github' }];
    if (repository.homepage) {
        links.push({ type: 'link', text: 'Project Website', url: repository.homepage, icon: 'fas fa-external-link-alt' });
    }

    return {
        title: repository.name,
        url: repository.html_url,
        colorClass: 'tile-tone-09',
        languages: [repository.fork ? 'Fork & Collaboration' : null, repository.language, ...(repository.topics || []).slice(0, 3)].filter(Boolean),
        date: repository.pushed_at,
        description: [repository.description || (repository.fork
            ? 'A fork I am developing with improvements and planned add-ons for the original project.'
            : 'Public source code and project files available on GitHub.')],
        links
    };
}

function getFeaturedGithubUrls() {
    const urls = new Set();
    portfolioData.categories.forEach((category) => {
        category.projects.forEach((project) => {
            if (project.url && project.url.includes('github.com/')) urls.add(normalizeUrl(project.url));
        });
    });
    return urls;
}

function normalizeUrl(url) {
    return url.toLowerCase().replace(/\/$/, '');
}

function buildGithubFallback(username, message) {
    const fallback = document.createElement('section');
    fallback.classList.add('githubFallback', 'fullRow');
    const text = document.createElement('p');
    text.textContent = message;
    const link = document.createElement('a');
    link.classList.add('tileLinkButton');
    link.href = `https://github.com/${encodeURIComponent(username)}?tab=repositories`;
    link.target = '_BLANK';
    link.innerHTML = '<i class="fab fa-github tileLinkIcon"></i><span>Browse all repositories on GitHub</span>';
    fallback.append(text, link);
    return fallback;
}

function hideJsWarning() {
    const warning = document.querySelector('[data-js-warning]');
    if (warning) {
        warning.classList.add('is-hidden');
    }
}

function showJsWarning() {
    const warning = document.querySelector('[data-js-warning]');
    if (warning) {
        warning.classList.remove('is-hidden');
    }
}

function renderSocialLinks() {
    const socialContainer = document.querySelector('[data-social-container]');
    if (!socialContainer || typeof portfolioData === 'undefined' || !portfolioData.socialLinks) return;

    portfolioData.socialLinks.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.classList.add('pill');
        if (link.colorClass) {
            anchor.classList.add(link.colorClass);
        }
        anchor.target = '_BLANK';
        anchor.href = link && link.url ? link.url : '#';
        anchor.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
        socialContainer.appendChild(anchor);
    });
}

function renderPortfolio() {
    const contentRoot = document.querySelector('[data-portfolio]');
    if (!contentRoot || typeof portfolioData === 'undefined' || !portfolioData.categories) return;

    portfolioData.categories.forEach((category) => {
        const categoryNode = cloneTemplate('category-template');
        const heading = categoryNode.querySelector('.sectionHeading');
        const tileContainer = categoryNode.querySelector('.tileContainer');

        if (!heading || !tileContainer) {
            return;
        }

        heading.textContent = category.title;

        category.projects.forEach((project) => {
            const tile = buildTile(project);
            tileContainer.appendChild(tile);
        });

        contentRoot.appendChild(categoryNode);
    });
}

function buildTile(project) {
    const tile = cloneTemplate('tile-template');
    const button = tile.querySelector('.tileButton');
    let title = tile.querySelector('.tileTitle') || tile.querySelector('h3');
    const languagesLine = tile.querySelector('.tileLanguages');
    const time = tile.querySelector('time');
    const headerNote = tile.querySelector('.tileHeaderNote');
    const contentContainer = tile.querySelector('.tileContent');
    const linkList = tile.querySelector('.tileLinks');

    if (!button || !languagesLine || !time || !headerNote || !contentContainer || !linkList) {
        return tile;
    }

    if (!title) {
        title = document.createElement('h3');
        title.classList.add('tileTitle');
        button.prepend(title);
    }

    if (project.fullRow) {
        tile.classList.add('fullRow');
    }

    title.textContent = project.title;

    if (project.url) {
        button.href = project.url;
        button.target = '_BLANK';
    } else {
        button.removeAttribute('href');
    }

    if (project.colorClass) {
        button.classList.add(project.colorClass);
    }

    if (project.languages && project.languages.length) {
        languagesLine.textContent = project.languages.join(' • ');
    } else {
        languagesLine.remove();
    }

    if (project.date) {
        time.textContent = formatDate(project.date);
        time.dateTime = project.date;
    } else {
        time.remove();
    }

    if (project.headerNote) {
        headerNote.innerHTML = project.headerNote;
    } else {
        headerNote.remove();
    }

    if (project.content) {
        project.content.forEach((block) => {
            if (block.type === 'image') {
                const paragraph = document.createElement('p');
                const anchor = document.createElement('a');
                anchor.href = block.src;
                anchor.target = '_blank';
                const image = document.createElement('img');
                image.src = block.src;
                image.alt = block && block.alt ? block.alt : '';
                anchor.appendChild(image);
                paragraph.appendChild(anchor);
                contentContainer.appendChild(paragraph);
            }
        });
    }

    if (project.description) {
        project.description.forEach((text) => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text;
            contentContainer.appendChild(paragraph);
        });
    }

    if (!project.links || project.links.length === 0) {
        linkList.remove();
    } else {
        project.links.forEach((item) => {
            const li = document.createElement('li');
            switch (item.type) {
                case 'link': {
                    const anchor = document.createElement('a');
                    anchor.target = '_BLANK';
                    anchor.href = item && item.url ? item.url : '#';
                    anchor.classList.add('tileLinkButton');

                    const icon = document.createElement('i');
                    icon.className = `${item && item.icon ? item.icon : 'fas fa-link'} tileLinkIcon`;
                    anchor.appendChild(icon);

                    const text = document.createElement('span');
                    text.textContent = item && item.text ? item.text : '';
                    anchor.appendChild(text);

                    if (item.note) {
                        const note = document.createElement('small');
                        note.classList.add('tileLinkNote');
                        note.textContent = item.note;
                        anchor.appendChild(note);
                    }
                    li.appendChild(anchor);
                    break;
                }
                case 'badge': {
                    const badgeImage = document.createElement('img');
                    badgeImage.alt = item && item.alt ? item.alt : item && item.text ? item.text : '';
                    badgeImage.src = item.src;
                    if (item.url) {
                        const anchor = document.createElement('a');
                        anchor.target = '_BLANK';
                        anchor.href = item.url;
                        anchor.appendChild(badgeImage);
                        li.appendChild(anchor);
                    } else {
                        li.appendChild(badgeImage);
                    }
                    break;
                }
                default: {
                    const chip = document.createElement('span');
                    chip.classList.add('tileLinkButton', 'is-static');
                    chip.textContent = item && item.text ? item.text : '';
                    li.appendChild(chip);
                }
            }
            linkList.appendChild(li);
        });
    }

    return tile;
}

function cloneTemplate(templateId) {
    const template = document.getElementById(templateId);
    return template.content.firstElementChild.cloneNode(true);
}

function formatDate(rawDate) {
    const parsed = new Date(rawDate);
    if (Number.isNaN(parsed)) {
        return rawDate;
    }

    const day = `${parsed.getDate()}`.padStart(2, '0');
    const month = `${parsed.getMonth() + 1}`.padStart(2, '0');
    const year = parsed.getFullYear();
    return `${day}-${month}-${year}`;
}
