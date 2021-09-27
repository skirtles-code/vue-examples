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
          text: 'Examples',
          children: [
            {
              text: 'Form Components',
              children: [
                {
                  text: 'Checkbox',
                  link: '/examples/checkbox/checkbox.html',
                }, {
                  text: 'Radio',
                  link: '/examples/radio/radio.html',
                }, {
                  text: 'Toggle Switch',
                  link: '/examples/toggle-switch/toggle-switch.html',
                }
              ]
            }, {
              text: 'Container Components',
              children: [
                {
                  text: 'Accordion',
                  link: '/examples/accordion/accordion.html',
                }, {
                  text: 'Tabs',
                  link: '/examples/tabs/tabs.html',
                }
              ]
            }
          ]
        // }, {
        //   text: 'Patterns',
        //   children: [
        //     {
        //       text: 'Computed v-model',
        //       link: '/patterns/computed-v-model.html'
        //     }
        //   ]
        }
      ]
    }
  }
}
