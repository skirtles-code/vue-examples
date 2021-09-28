<script setup>
import TabsExample from './tabs/example.vue'
</script>
# Tabs

## Tabs Example

There are various ways to split a tabbed UI up into components. In this example we're going to use two components, an outer container called `tabs` and an inner container for each child called `tab`:

<<< @/components/tabs/example.vue

<live-example>
  <tabs-example />
</live-example>

The `title` prop is used to pass the text to show on the button, with a slot for the content.

The code for `tabs.vue` looks long, but a lot of it is CSS:

<<< @/components/tabs/tabs.vue

`tab.vue` doesn't need much code:

<<< @/components/tabs/tab.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a tabs component, including:

- Ant Design Vue - [Tabs](https://2x.antdv.com/components/tabs)
- Element Plus - [Tabs](https://element-plus.org/#/en-US/component/tabs)
- Quasar - [Tabs](https://quasar.dev/vue-components/tabs) and [Tab Panels](https://quasar.dev/vue-components/tab-panels)
- PrimeVue - [TabView](https://primefaces.org/primevue/showcase/#/tabview)
