import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  outDir: '../dist',
  base: '/vue-examples',
  title: 'Vue Examples',
  lang: 'en-US',
  description: 'Examples of Vue patterns and basic components',
  appearance: false,

  themeConfig: {
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/skirtles-code/vue-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/'
      }, {
        text: 'Component Libraries',
        link: '/component-libraries'
      }, {
        text: 'Example Components',
        items: [
          {
            text: 'Checkbox',
            link: '/components/checkbox.html',
          }, {
            text: 'Radio',
            link: '/components/radio.html',
          }, {
            text: 'Toggle Switch',
            link: '/components/toggle-switch.html',
          }, {
            text: 'Radio Group',
            link: '/components/radio-group.html'
          }, {
            text: 'Accordion',
            link: '/components/accordion.html',
          }, {
            text: 'Tabs',
            link: '/components/tabs.html',
          }
        ]
      }, {
        text: 'Patterns',
        items: [
          {
            text: 'Computed with v-model',
            link: '/patterns/computed-v-model.html'
          }, {
            text: 'Global Properties',
            link: '/patterns/global-properties.html'
          }, {
            text: 'Coupled Components with provide/inject',
            link: '/patterns/coupled-components-with-provide-inject.html'
          }
        ]
      }, {
        text: 'Guides',
        items: [
          {
            text: 'Working with Image Assets',
            link: '/guides/working-with-image-assets.html'
          }, {
            text: 'Understanding the Vue Source Code',
            link: '/advanced/understanding-the-vue-source-code.html'
          }
        ]
      }, {
        text: 'Exercises',
        link: '/exercises/',
        items: [
          {
            text: 'Tic-tac-toe',
            link: '/exercises/tic-tac-toe.html'
          }, {
            text: 'Quiz',
            link: '/exercises/quiz.html'
          }, {
            text: 'Minesweeper',
            link: '/exercises/minesweeper.html'
          }, {
            text: 'Numbers Game',
            link: '/exercises/numbers-game.html'
          }
        ]
      }
    ]
  }
})