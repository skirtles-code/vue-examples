module.exports = {
  base: '/vue-examples',
  title: 'Vue Examples',
  lang: 'en-US',
  description: 'Examples of basic Vue components',

  themeConfig: {
    repo: 'skirtles-code/vue-examples',

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Introduction',
          link: '/'
        }, {
          text: 'Example Components',
          children: [
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
          children: [
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
          children: [
            {
              text: 'Working with Image Assets',
              link: '/guides/working-with-image-assets.html'
            }, {
              text: 'Understanding the Vue Source Code',
              link: '/advanced/understanding-the-vue-source-code.html'
            }
          ]
        }
      ]
    }
  }
}
