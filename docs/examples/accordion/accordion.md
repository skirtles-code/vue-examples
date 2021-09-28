<script setup>
import AccordionExample from './example.vue'
</script>
# Accordion

## Accordion Example

The accordion presented here is made up of two components. There is an outer `accordion` component that acts as a container, with `accordion-panel` components as children that can be expanded or collapsed.

Usage might look something like this:

<<< @/examples/accordion/example.vue

While the 3 children given in this example are static, they could also be created dynamically using `v-for` over a suitable array.

Running this example we get:

<live-example>
  <accordion-example />
</live-example>

The code for `accordion.vue`:

<<< @/examples/accordion/accordion.vue

The corresponding `accordion-panel.vue` is:

<<< @/examples/accordion/accordion-panel.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include an accordion component, or a component that can achieve a similar effect. These include:

- Ant Design Vue - [Collapse](https://2x.antdv.com/components/collapse)
- Element Plus - [Collapse](https://element-plus.org/#/en-US/component/collapse)
- Quasar - [Expansion Item](https://quasar.dev/vue-components/expansion-item)
- PrimeVue - [Accordion](https://primefaces.org/primevue/showcase/#/accordion)
