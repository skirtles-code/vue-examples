<script setup>
import AccordionExample from './accordion/example.vue'
</script>
# Accordion

## Accordion Example

The accordion presented here is made up of two components. There is an outer `accordion` component that acts as a container, with `accordion-panel` components as children that can be expanded or collapsed.

Usage might look something like this:

<<< @/components/accordion/example.vue

While the 3 children given in this example are static, they could also be created dynamically using `v-for` over a suitable array.

Running this example we get:

<live-example>
  <accordion-example />
</live-example>

The code for `accordion.vue`:

<<< @/components/accordion/accordion.vue

The corresponding `accordion-panel.vue` is:

<<< @/components/accordion/accordion-panel.vue

## Vue Patterns

See [Coupled Components with `provide`/`inject`](../patterns/coupled-components-with-provide-inject.html).

<!--
## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include an accordion component, or a component that can achieve a similar effect. These include:

- Ant Design Vue - [Collapse](https://2x.antdv.com/components/collapse)
- Element Plus - [Collapse](https://element-plus.org/en-US/component/collapse.html)
- Quasar - [Expansion Item](https://quasar.dev/vue-components/expansion-item)
- Headless UI - [Disclosure](https://headlessui.dev/vue/disclosure)
- PrimeVue - [Accordion](https://primefaces.org/primevue/showcase/#/accordion)
- Naive UI - [Collapse](https://www.naiveui.com/en-US/os-theme/components/collapse)
- Oruga - [Collapse](https://oruga.io/components/Collapse.html)
