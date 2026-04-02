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
          items: ['gdd/overview/concept'],
        },
        {
          type: 'category',
          label: 'Канон',
          items: [
            'gdd/canon/game-model',
            'gdd/canon/world-progression',
            'gdd/canon/deep-mechanics',
            'gdd/canon/combat-unit-lifecycle',
            'gdd/canon/dark-age-vertical-slice',
          ],
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
