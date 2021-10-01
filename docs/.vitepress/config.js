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
              text: 'Form Components',
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
                }
              ]
            }, {
              text: 'Container Components',
              children: [
                {
                  text: 'Accordion',
                  link: '/components/accordion.html',
                }, {
                  text: 'Tabs',
                  link: '/components/tabs.html',
                }
              ]
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
            }
          ]
        }
      ]
    }
  }
}
