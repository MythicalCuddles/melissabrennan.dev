// Centralized portfolio data for rendering
const portfolioData = {
    socialLinks: [
        {
            label: 'GitHub',
            url: 'https://github.com/mythicalcuddles',
            icon: 'fab fa-github',
            colorClass: 'tile-tone-01'
        },
        {
            label: 'Instagram',
            url: 'https://instagram.com/mythicalcuddles',
            icon: 'fab fa-instagram',
            colorClass: 'tile-tone-01'
        },
        {
            label: 'Bluesky',
            url: 'https://bsky.app/profile/mythicalcuddl.es',
            icon: 'fab fa-bluesky',
            colorClass: 'tile-tone-02'
        },
        {
            label: 'SoundCloud',
            url: 'https://soundcloud.com/mythicalcuddles',
            icon: 'fab fa-soundcloud',
            colorClass: 'tile-tone-02'
        },
        {
            label: 'YouTube',
            url: 'https://www.youtube.com/@mythicalcuddles',
            icon: 'fab fa-youtube',
            colorClass: 'tile-tone-03'
        },
        {
            label: 'Twitch',
            url: 'https://www.twitch.tv/mythicalcuddles',
            icon: 'fab fa-twitch',
            colorClass: 'tile-tone-03'
        },
        {
            label: 'Documentations',
            url: 'https://docs.mythicalcuddl.es',
            icon: 'fa fa-server',
            colorClass: 'tile-tone-04'
        },
        {
            label: 'Blog',
            url: 'https://docs.mythicalcuddl.es/blog',
            icon: 'fa fa-server',
            colorClass: 'tile-tone-04'
        }
    ],
    categories: [
        {
            title: 'My Websites',
            projects: [
                {
                    title: 'melissabrennan.dev',
                    url: 'https://melissabrennan.dev',
                    colorClass: 'tile-tone-06',
                    languages: ['HTML', 'CSS', 'JavaScript'],
                    description: [
                        'Nothing special, its just this website you\'re looking at right now where I display the projects I\'m looking to share with everyone. The source code for this website is available on GitHub.'
                    ],
                    links: [
                        { type: 'link', text: 'Source Code', url: 'https://github.com/MythicalCuddles/melissabrennan.dev' }
                    ]
                },
                {
                    title: 'mythicalcuddl.es',
                    url: 'https://mythicalcuddl.es',
                    colorClass: 'tile-tone-07',
                    languages: ['HTML', 'CSS'],
                    description: [
                        'This domain just redirects to my linktree. I might do something with it in the future.'
                    ]
                },
                {
                    title: 'mythicalcuddles.xyz',
                    url: 'https://mythicalcuddles.xyz',
                    colorClass: 'tile-tone-08',
                    languages: ['HTML', 'CSS'],
                    description: [
                        'This domain just redirects to my Discord Server (invite link). I might do something with it in the future.'
                    ]
                }
            ]
        },
        {
            title: 'Games',
            projects: [
                {
                    title: 'What is this???',
                    colorClass: 'tile-tone-09',
                    fullRow: true,
                    description: [
                        'I\'m working on a few games in the background... Though they won\'t be open sourced, I\'d still like to share them with you when the time comes.',
                        'Stay tuned!'
                    ]
                }
            ]
        },
        {
            title: 'VRChat',
            projects: [
                {
                    title: 'What is VRChat?',
                    url: null,
                    colorClass: 'tile-tone-10',
                    fullRow: true,
                    description: [
                        'This whole section will be covering the creations I\'ve made in Unity3D to work along with the VRChat world. VRChat is a free game which you can download from Steam or the Oculus store, which allows the players to be in complete control of the content creation on the game. The game can be played on desktop or in Virtual Reality. I\'ve launched a couple of worlds, working on a few more and helped out in a few. You can view them here.'
                    ],
                    links: [
                        { type: 'link', text: 'VRChat Homepage', url: 'https://vrchat.com' },
                        { type: 'link', text: 'What is Udon?', url: 'https://docs.vrchat.com/docs/what-is-udon' }
                    ]
                },
                {
                    title: 'The Lustful Wenches',
                    url: 'https://vrchat.com/home/launch?worldId=wrld_65aed793-367d-4251-8f33-aecd46243c0d',
                    colorClass: 'tile-tone-11',
                    languages: ['Unity3D', 'Udon(Sharp)'],
                    date: '2022/02/18',
                    content: [
                        { type: 'image', src: 'images/vrchat_lustfulwenches.png', alt: '' }
                    ],
                    description: [
                        'A tavern styled world for friends to travel to and chill. The world settings was developed by myself using a mix of C#, Udon and UdonSharp and include features such as toggling different mirrors, gameobjects and allowing for users to interact with colliders etc.',
                        'These scripts will be published on GitHub when completed and be used in the next collab project where additional scripts will be able to be implemented too. Plans to create a DnD themed world from this are in the works, along with scripts to have the world run smoothly.'
                    ],
                    links: [
                        { type: 'link', text: 'View World', url:'https://vrchat.com/home/launch?worldId=wrld_65aed793-367d-4251-8f33-aecd46243c0d' }
                    ]
                },
                {
                    title: 'A State of Trance Studio',
                    url: 'https://vrchat.com/home/world/wrld_fb9d5d2f-caaf-4fc0-a071-f058f2759e95',
                    colorClass: 'tile-tone-04',
                    languages: ['Unity3D', 'Udon(Sharp)', 'Blender'],
                    date: '2023/11/11',
                    content: [
                        { type: 'image', src: 'images/vrchat_asot.png', alt: '' }
                    ],
                    description: [
                        'Radio office based of A State of Trance',
                        'This world is definitely still a work in progress, but includes some features to allow for livestreaming to take place. The storage room door isn\'t added however the wall is walkthrough which will allow access to stream camera bubbles along with a pickup camera which also has a stream camera bubble',
                    ],
                    links: [
                        { type: 'link', text: 'View World', url:'https://vrchat.com/home/world/wrld_fb9d5d2f-caaf-4fc0-a071-f058f2759e95' }
                    ]
                },
                {
                    title: 'Murder 4 Paintings',
                    url: null,
                    colorClass: 'tile-tone-12',
                    languages: ['Unity3D'],
                    date: '2021/11/19',
                    content: [
                        { type: 'image', src: 'images/vrchat_m4paintings.png', alt: '' },
                        { type: 'image', src: 'images/unity_m4paintings.png', alt: '' }
                    ],
                    description: [
                        'Murder 4 Paintings is an avatar prefab available over on my Discord. The prefab is attached to a private avatar in unity and uploaded to VRChat, allowing for the user to change the paintings in the popular game world known as Murder 4.',
                        'The asset takes advantage of world constraints and parent constraints in Unity, allowing for planes to be placed at specific points in the world to cover the paintings seen in the world.'
                    ],
                    links: [
                        { type: 'text', text: 'Avatar Asset' },
                        { type: 'text', text: 'Not Maintained' }
                    ]
                },
                {
                    title: "Cuddles' Memories",
                    url: 'https://vrchat.com/home/launch?worldId=wrld_e2fa9d6b-4ee8-4bc8-bfd2-25892d4dd0a3',
                    colorClass: 'tile-tone-13',
                    languages: ['Unity3D', 'Udon/UdonSharp'],
                    date: '2020/10/18',
                    content: [
                        { type: 'image', src: 'images/vrchat_cuddlesmemories.png', alt: '' }
                    ],
                    description: [
                        'Cuddles\' Memories was the first world I publically released in VRChat with showcases how Unity\'s Pro-Builder can be used to build a world. I also created different scripts to toggle systems such as the world\'s mirror, providing different options and toggle other portals.',
                        'The world is a small gallery with different rooms. The world is still up and running in VRChat, but I no longer maintain it as I\'ve moved on to other projects and worlds. However, you can still visit the world and check it out if you like!'
                    ],
                    links: [
                        { type: 'text', text: 'View World' }
                    ]
                }
            ]
        },
        /*{
            title: 'Archived & Abandonware',
            projects: [
                {
                    title: 'Archived & Abandonware',
                    url: null,
                    colorClass: 'tile-tone-14',
                    fullRow: true,
                    description: [
                        'Projects below this section have been Archived and Abandoned. They may not be working anymore or work as expected! Use with your own caution.'
                    ]
                }
            ]
        },*/
        {
            title: 'Personal Projects',
            projects: [
                {
                    title: 'Notice',
                    colorClass: 'tile-tone-15',
                    fullRow: true,
                    description: [
                        'Projects below have been Archived as they are past projects that I no longer work on. They may not be working anymore or work as expected! Use with your own caution.'
                    ]
                },
                {
                    title: 'DiscordBot',
                    url: 'https://github.com/MythicalCuddles/DiscordBot',
                    colorClass: 'tile-tone-16',
                    languages: ['C#', 'MySQL'],
                    headerNote: '🌟 Contributed to the <a target="_BLANK" href="https://archiveprogram.github.com">2020 GitHub Arctic Code Vault</a>!',
                    description: [
                        'DiscordBot is a C# Bot for Discord which includes many features such as allowing users to create their own profiles, earn EXP to level up and compete for #1 on the leaderboard and many more features.',
                        'DiscordBot uses MySQL to store user, channel and guild data to be used by commands through the bot or to be viewed using DiscordBot Web.'
                    ],
                    links: [
                        { type: 'link', text: 'Latest Release', url: 'https://github.com/MythicalCuddles/DiscordBot/releases' },
                        { type: 'link', text: 'Wiki', url: 'https://github.com/MythicalCuddles/DiscordBot/wiki' }
                    ]
                },
                {
                    title: 'DiscordBot Web',
                    url: 'https://github.com/MythicalCuddles/DiscordBot-Web',
                    colorClass: 'tile-tone-17',
                    languages: ['PHP', 'MySQL'],
                    date: '2022-08-14',
                    description: [
                        'DiscordBot Web is the web application that works along with DiscordBot. However, an instance of DiscordBot is required in order to have it working as the application creates and manages the required database tables and rows.'
                    ]
                },
                {
                    title: 'MogiiBot3',
                    url: 'https://github.com/MythicalCuddles/MogiiBot3',
                    colorClass: 'tile-tone-18',
                    languages: ['C#'],
                    date: '2018-06-00',
                    description: [
                        'MogiiBot is a C# Bot for Discord which was replaced by the DiscordBot project in 06-2018. It originally used JSON to store user files allowing users to have profiles provided by the bot along with other features.',
                        'Due to name changes and file changes, MogiiBot was archived and replaced by DiscordBot, which has more advanced features and better conventions.'
                    ]
                },
                {
                    title: 'MelissaNET',
                    url: null,
                    colorClass: 'tile-tone-19',
                    languages: ['C# Library'],
                    description: [
                        'MelissaNET is a C# library, which was created mainly to provide update functionality via online version checking for DiscordBot. It has been developed to provide additional features that can be used over multiple projects.',
                        "At the moment, MelissaNET is a private repository as I am working on updating a ReadMe file for it and provide better functionality for global use. It is however attached with the release versions of DiscordBot."
                    ]
                },
                {
                    title: 'Gender Essence',
                    url: 'https://genderessence.org.uk',
                    colorClass: 'tile-tone-20',
                    languages: ['CMS', 'HTML', 'CSS'],
                    description: [
                        "Gender Essence was one of my first websites I helped get online using a Content Management System (CMS). The use of the CMS allowed for the client to go on at a later time and alter the content of the websites to her liking, allowing for the website to show up to date information which best suited her company.",
                        "My work done with Gender Essence provided me with my first insight to CMS and the power they're able to deliver to easily build websites and modify the content on the website."
                    ],
                    links: [
                        { type: 'link', text: 'Wayback Machine', url: 'https://web.archive.org/web/20201130101037/http://genderessence.org.uk/' }
                    ]
                }
            ]
        },
        {
            title: 'DJ Sets',
            projects: [
                {
                    title: '(UK) Happy Hardcore',
                    url: null,
                    colorClass: 'tile-tone-21',
                    links: [
                        { type: 'link', text: 'Berserk IV - 27th July 2024', url: 'https://youtu.be/qKHb6YY0cPg' },
                        { type: 'link', text: 'Popup - 10th May 2024', url: 'https://youtu.be/VH_DLvnsgXM' }
                    ]
                },
                {
                    title: 'Trance',
                    url: null,
                    colorClass: 'tile-tone-22',
                    links: [
                        { type: 'link', text: 'Popup - 27th September 2024', url: 'https://youtu.be/8ZQRPaIT82U' }
                    ]
                }
            ]
        },
        {
            title: 'University Projects',
            projects: [
                {
                    title: 'Notice',
                    colorClass: 'tile-tone-23',
                    fullRow: true,
                    description: [
                        'Projects below have been Archived as they were made as part of my University Course. They may not be working anymore or work as expected! Use with your own caution.'
                    ]
                },
                {
                    title: 'Book Loaning System',
                    url: 'https://github.com/MythicalCuddles/Book-Loaning-System',
                    colorClass: 'tile-tone-24',
                    languages: ['100% 🏆', 'Java'],
                    date: '2017/12/18',
                    description: [
                        'COM187 Software Development II Coursework 3 - A system for a primary school class that records which fiction and non-fiction books are lent out to the pupils.',
                        "Since submitting the project, I've continued to work on this project. The source code will have new changes and isn't an actual repersentation of the submitted version. You can view the submitted version below along with the updated source code."
                    ],
                    links: [
                        { type: 'link', text: 'Submitted Version', url: 'https://github.com/MythicalCuddles/Book-Loaning-System/releases/tag/1.0' }
                    ]
                },
                {
                    title: 'Dynamic Web Authoring',
                    url: 'https://github.com/MythicalCuddles/UU-DynamicWebAuthoring',
                    colorClass: 'tile-tone-25',
                    languages: ['HTML', 'CSS', 'JavaScript'],
                    date: '2018/08/17',
                    description: [
                        'COM353 Dynamic Web Authoring',
                        'This repository contains both the learning logs and coursework project. The learning logs were created on a blog styled website where each entry is linked on the first page. The coursework project was designed around the idea of a hotel reservation system using JavaScript for a booking and login system.'
                    ]
                },
                {
                    title: 'Quiz Game',
                    url: null,
                    colorClass: 'tile-tone-26',
                    languages: ['C++'],
                    date: '2019/12/12',
                    description: [
                        'COM357 Coursework - A quiz game filled with multiple-choice questions aiming to access the players knowledge of C++. The player is able to enter their name and select an avatar before begining the game.',
                        "This projects source code is currently in a private repository as I'm still working on the ReadMe file for the project. As soon as I've published that, the source code link will be updated above."
                    ]
                },
                {
                    title: 'Booking System',
                    url: 'https://github.com/MythicalCuddles/UU-HCI',
                    colorClass: 'tile-tone-27',
                    languages: ['HTML', 'CSS'],
                    date: '2018/08/17',
                    description: [
                        'COM308 HCI Coursework 3 - A system designed as a Medical Practice Booking System. Project part of HCI, which focused on the design aspect rather than the functionality aspect.'
                    ]
                },
                {
                    title: 'Software Development',
                    url: 'https://github.com/MythicalCuddles/UU-SoftwareDevelopment',
                    colorClass: 'tile-tone-28',
                    languages: ['Java'],
                    description: [
                        'COM186 & COM187 Software Development - An asortment of practical work I\'ve done from these two modules.'
                    ]
                },
                {
                    title: 'Introduction to Java',
                    url: 'https://github.com/MythicalCuddles/Introduction-to-Java-Programming-10th-Edition',
                    colorClass: 'tile-tone-29',
                    languages: ['Java'],
                    description: [
                        'Introduction to Java Programming 10th Edition - All the practicals I\'ve done from the Introduction to Java Programming 10th Edition book. These were only done during the COM186 & COM187 module dates, and may be updated in the future with more practical work.'
                    ]
                },
                {
                    title: 'Computer Hardware',
                    url: 'https://github.com/MythicalCuddles/UU-ComputerHardware',
                    colorClass: 'tile-tone-30',
                    languages: ['Assembly'],
                    description: [
                        'COM181 Computer Hardware Coursework - This is the coursework I did for Computer Hardware, which contains an Binary Adder Circuit as Assignment 1 and a Decimal to Roman Numerals Converter as Assignment 2.'
                    ]
                }
            ]
        }
    ]
};
