// melissabrennan.dev - portfolio renderer

document.addEventListener('DOMContentLoaded', () => {
    renderSocialLinks();
    renderPortfolio();
});

function renderSocialLinks() {
    const socialContainer = document.querySelector('[data-social-container]');
    if (!socialContainer || !portfolioData?.socialLinks) return;

    portfolioData.socialLinks.forEach((link) => {
        const anchor = document.createElement('a');
        anchor.classList.add('pill');
        if (link.colorClass) {
            anchor.classList.add(link.colorClass);
        }
        anchor.target = '_BLANK';
        anchor.href = link.url ?? '#';
        anchor.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
        socialContainer.appendChild(anchor);
    });
}

function renderPortfolio() {
    const contentRoot = document.querySelector('[data-portfolio]');
    if (!contentRoot || !portfolioData?.categories) return;

    portfolioData.categories.forEach((category) => {
        const categoryNode = cloneTemplate('category-template');
        const heading = categoryNode.querySelector('.sectionHeading');
        const tileContainer = categoryNode.querySelector('.tileContainer');
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
    const title = tile.querySelector('h2');
    const time = tile.querySelector('time');
    const headerNote = tile.querySelector('.tileHeaderNote');
    const contentContainer = tile.querySelector('.tileContent');
    const linkList = tile.querySelector('.tileLinks');

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
                image.alt = block.alt ?? '';
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
                    anchor.href = item.url ?? '#';
                    anchor.innerHTML = `${item.text}${item.note ?? ''}`;
                    li.appendChild(anchor);
                    break;
                }
                case 'badge': {
                    const badgeImage = document.createElement('img');
                    badgeImage.alt = item.alt ?? item.text ?? '';
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
                    li.innerHTML = item.text ?? '';
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
