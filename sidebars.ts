import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Документ дизайна игры',
      items: [
        {
          type: 'category',
          label: 'Введение',
          items: ['gdd/introduction/introduction', 'gdd/introduction/objectives'],
        },
        {
          type: 'category',
          label: 'Обзор',
          items: ['gdd/overview/concept', 'gdd/overview/gameplay-concept'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Технический документ',
      items: ['tdd/index'],
    },
    {
      type: 'category',
      label: 'Библия мира',
      items: ['world-bible/index'],
    },
  ],
}

export default sidebars
