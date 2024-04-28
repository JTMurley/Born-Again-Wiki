import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Born Again Wiki',
  tagline: 'Born Again, the better perma death experience',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://born-again-wiki.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JTMurley', // Usually your GitHub org/user name.
  projectName: 'born-again-wiki', // Usually your repo name.

  onBrokenLinks: 'warn',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Born Again Wiki',
      logo: {
        alt: 'Born Again Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Guilds',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Players',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Characters',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Pets',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Trading',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/JTMurley/Born-Again-Wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            // {
            //   label: 'Getting Started',
            //   to: '/docs/getting_started',
            // },
            // {
            //   label: 'Classes',
            //   to: '/docs/getting_started',
            // },
            // {
            //   label: 'Items',
            //   to: '/docs/getting_started',
            // },
            // {
            //   label: 'Bosses',
            //   to: '/docs/getting_started',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/bornagain',
            },
            {
              label: 'Steam',
              href: 'https://store.steampowered.com/app/2332210/Born_Again/',
            },
            {
              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=co.unnamedstudios.bornagain',
            },
            {
              label: 'Apple App Store',
              href: 'https://apps.apple.com/us/app/born-again-online/id1629507405',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Help Contribute',
              href: 'https://github.com/JTMurley/Born-Again-Wiki',
            },
            {
              label: 'Getting Involved',
              href: 'https://github.com/JTMurley/Born-Again-Wiki',
            },
            {
              label: 'Support',
              href: 'https://github.com/JTMurley/Born-Again-Wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JTMurley`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
