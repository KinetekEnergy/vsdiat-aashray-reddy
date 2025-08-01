// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Aashray Reddy\'s VSDIAT',
    tagline: 'A site for all of my notes on the VSDIAT course.',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://vsdiat-aashray-reddy',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/vsdiat-aashray-reddy/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'kinetekenergy', // Usually your GitHub org/user name.
    deploymentBranch: 'gh-pages',
    projectName: 'vsdiat-aashray-reddy', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // add latex support for docs
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    plugins: [
        'docusaurus-plugin-image-zoom'
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',

            // navbar settings
            navbar: {
                title: 'AR VSDIAT',
                logo: {
                    alt: 'Default Logo',
                    src: 'img/logo-dynamic-light.png',
                    srcDark: 'img/logo-dynamic.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'materialSidebar',
                        position: 'left',
                        label: 'VSDIAT Notes & Content',
                    },
                ],
            },

            // add a footer
            footer: {
                links: [
                    {
                        title: 'Open source is love ❤️',
                        items: [
                            {
                                label: 'My GitHub',
                                href: 'https://github.com/KinetekEnergy',
                            },
                            {
                                label: 'Site GitHub',
                                href: 'https://github.com/KinetekEnergy/vsdiat-aashray-reddy',
                            },
                        ],
                    },
                ],
            },

            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['bash'],
            },

            // when clicking on an image, it zooms
            zoom: {
                // selector: '.markdown > img',
                background: {
                    light: 'rgba(255, 255, 255, 0)',
                    dark: 'rgba(50, 50, 50, 0)'
                },
                config: {
                    margin: 100,
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                }
            }
        }),

};

// add katex stylesheet for latex rendering
config.stylesheets = [
    {
        href: 'static/katex.min.css',
        type: 'text/css',
    },
];

export default config;
