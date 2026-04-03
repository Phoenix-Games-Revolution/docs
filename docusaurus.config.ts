import type * as Preset          from '@docusaurus/preset-classic'
import type { Config }           from '@docusaurus/types'

import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'Last Strategy',
  tagline: 'by Phoenix Games Revolution',
  favicon: 'img/favicon.ico',

  url: 'https://ls.pgr.studio',
  baseUrl: '/',

  organizationName: 'phoenix-games-revolution',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Phoenix-Games-Revolution/docs/edit/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/open-graph.jpg',
    navbar: {
      title: 'Last Strategy',
      logo: {
        alt: 'Phoenix Games Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Phoenix-Games-Revolution/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Game Design',
          items: [
            {
              label: 'Об игре',
              to: '/gdd/introduction',
            },
            {
              label: 'Цели',
              to: '/gdd/introduction/objectives',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Phoenix Games Revolution`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
