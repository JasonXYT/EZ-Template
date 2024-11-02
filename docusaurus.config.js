// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// import { themes as prismThemes } from 'prism-react-renderer';

import darkCode from './src/utils/codeDark.ts';
import lightCode from './src/utils/codeLight.ts';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WMEZ-Template',
  tagline: 'robotics is ez',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ez-robotics.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EZ-Robotics', // Usually your GitHub org/user name.
  projectName: 'EZ-Template', // Usually your repo name.
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

          // For when 3.0 is actually released
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.1.0',
              banner: 'none',
            },
            '2.x': {
              label: '2.x',
              banner: 'unmaintained',
            },
          },

          /*
          // While 3.0 isn't released
          lastVersion: '2.x',
          versions: {
            current: {
              label: '3.0.0-pre-release',
              banner: 'unreleased',
            },
            '2.x': {
              label: '2.x',
              banner: 'none',
            },
          },
          */

          routeBasePath: '/', // url
          path: './ez-template-docs', // file path
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/ez-robotics/EZ-Template/tree/website/${versionDocsDirPath}/${docPath}`,
        },

        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],


  ],


  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community', // file path
        routeBasePath: 'community', // url
        sidebarPath: './sidebarsCommunity.js',
        // ... other options
      },
    ],
  ],





    themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Replace with your project's social card
      image: 'img/embed.png',
      navbar: {
        title: 'EZ-Template',
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/versions', label: 'Versions' }],
            dropdownActiveClassDisabled: true,
          },
          // { to: '/', label: 'EZ-Template', position: 'left' },
          { to: '/category/tutorials', label: 'Tutorials', position: 'left' },
          { to: '/category/docs', label: 'Docs', position: 'left' },
          { to: '/community/category/showcase', label: 'Showcase', position: 'left' },
          { to: '/community/support', label: 'Support', position: 'left' },
          { href: 'https://www.roboticsisez.com/', label: 'robotics is ez', position: 'right' },
          { href: 'https://github.com/EZ-Robotics/EZ-Template', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'EZ-Template',
                to: '/',
              },
              {
                label: 'Tutorials',
                to: '/category/tutorials',
              },
              {
                label: 'Docs',
                to: '/category/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/EHjXBcK2Gy',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/roboticsisez',
              },
              {
                label: 'Support',
                href: '/community/support',
              },
              {
                label: 'Showcase',
                href: '/community/category/showcase',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'robotics is ez',
                href: 'https://www.roboticsisez.com/',
              },
              {
                label: 'Changelog',
                href: '/versions',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EZ-Robotics',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} robotics is ez - built with docusaurus`,
      },
      prism: {
        theme: lightCode,
        darkTheme: darkCode,
      },
    }),
};

export default config;
