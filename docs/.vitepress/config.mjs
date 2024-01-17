import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  outDir: '../dist',
  cleanUrls: true,
  base: '/vue-examples',
  title: 'Vue Examples',
  lang: 'en-US',
  description: 'Examples of Vue patterns and basic components',
  appearance: false,

  transformHead({ page, siteData: { base } }) {
    if (page !== '404.md') {
      const canonicalUrl = `https://skirtles-code.github.io${base}${page}`
        .replace(/index\.md$/, '')
        .replace(/\.md$/, '')

      return [['link', { rel: 'canonical', href: canonicalUrl }]]
    }
  },

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
            link: '/components/checkbox',
          }, {
            text: 'Radio',
            link: '/components/radio',
          }, {
            text: 'Toggle Switch',
            link: '/components/toggle-switch',
          }, {
            text: 'Radio Group',
            link: '/components/radio-group'
          }, {
            text: 'Accordion',
            link: '/components/accordion',
          }, {
            text: 'Tabs',
            link: '/components/tabs',
          }
        ]
      }, {
        text: 'Patterns',
        items: [
          {
            text: 'Computed with v-model',
            link: '/patterns/computed-v-model'
          }, {
            text: 'Global Properties',
            link: '/patterns/global-properties'
          }, {
            text: 'Coupled Components with provide/inject',
            link: '/patterns/coupled-components-with-provide-inject'
          }
        ]
      }, {
        text: 'Guides',
        items: [
          {
            text: 'Working with Image Assets',
            link: '/guides/working-with-image-assets'
          }, {
            text: 'Understanding the Vue Source Code',
            link: '/advanced/understanding-the-vue-source-code'
          }
        ]
      }, {
        text: 'Exercises',
        link: '/exercises/',
        items: [
          {
            text: 'Tic-tac-toe',
            link: '/exercises/tic-tac-toe'
          }, {
            text: 'Quiz',
            link: '/exercises/quiz'
          }, {
            text: 'Minesweeper',
            link: '/exercises/minesweeper'
          }, {
            text: 'Numbers Game',
            link: '/exercises/numbers-game'
          }
        ]
      }
    ]
  }
})
