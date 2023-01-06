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

[SFC Playground](https://sfc.vuejs.org/#eNqlVU1z4zYM/Suo9hBnalne7EdnVDvt9tDpcWfSvemwMgnZzFKkSlJOPB7/94KkJMuJnTa7J5sg8PAAPFD75FPTzLYtJnmysMyIxoFF1za3hRJ1o42DP0or2CfGtOFCK6iMruFqlp2aPcTVhZDPpUJ5IS7cdcGLLBKg1HRwWDeydEgngMXKR6VlHxaMz81pE1I54SQui+RPYawrks4ZIJwh+jCtHCrX4WRngf5fljskLD5KM1CHbVppQy4ChIKb+cgHIIadsoH9HgQcDkevxcoQiqgCyE/L5SnKIjvp0g8W8vdGmHEd4fzadj27I+uIZjJNokbSumxm91YrEt7eB1KB4cIWSQ7B4m2kDH8uko1zjc2zzFbMy+XezrRZZ/RvZlrlRI0ztHW6MvrBoiHgIpmOMDIybtGkBhVHg+YlzCeuz3A9LE3oQKU834HLa7SnHtZN65BPoTF6KzhOwWAFh2414hIUKsvgLy25BbdBEBx0Ff6x1hAlJ3eAj9Rujt1oCkWzIVkP1qVHnahWyusO7otF+Nrl/ApOeyZ1qwTzGn0QbhMTbITsMG2hOvfJ1XHIBtfCOjRXU5hcw/I2TilmJ55LuNvVKy0nIS0QC9ca1Y+yp5cPbZhEkP5iti1li7AkjQt+TcOLcU6v1xJ9wg7oCNVHnIeA38D3IKe/MfAwYLaqL+UEV1QwOc/m6HMmu8/SX3ebG368RqgVL71qXGyBydJa2r6hz7SBCyu1g+x2kZHH6QIFFOt21BPLdIOcLLMhNhJd0QFNDm+bR7BaUi/eMMZ+9VdcWMLZ5VBJfAwW/yflwiBzBODHI9tahasNivXG5fBuPm+i84PgbpPDzftooBKpPE/GL/aFl/2llRDqnvJOQasvqta0yKTfp/sQBUZ6bCx1m2MlFH72p0koNrxew4th8J+WaiGZOdNi9wS4XUMed84ItR5NpocexECzDnzOin4UsB9EMO30OR1r6hBWMB7iMozKmxwdv0cc8aUtEsj7qyMZqqt/vE+CN1iSHCjmdyYF+0aWSJq86XsT+kffnF5rQ3j32enRKb4HXGm+O6NS//i/Uq/dFygM7xXSpAGeQfkZzgPXpVkLlTrdhJUY4mNfupUp2be1oRHxlLJoWp43+LH6WFWByAsL1XvfsHf4YR5NrbHe1mhBEzfBJkm0ab9Pb2fvgzESyyGNrIAeX85Jozl8GNH03b5IsvqlYv9N0jcyh7J1+iTvPGQ+ptf03aukfhhcI4FBX4HEUyzqbF+XL3/8JBz+BSU2i5A=)

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
