# Introduction

> Thank you to those on the [Vue Land Discord](https://chat.vuejs.org/) and elsewhere who inspired these ideas.

This collection of components and patterns is intended as a learning aid for those who are new to Vue.

Their primary purpose is to illustrate how core Vue 3 features can be combined to create standard UI components. The techniques used are intended to demonstrate idiomatic Vue usage for these types of scenarios. These examples have very limited functionality and are not intended to be production-ready components.

As with all code, trade-offs have been made and alternative approaches may be better in some cases. The explanation that accompanies each example attempts to discuss some of its shortcomings.

In pretty much all cases, the styling and accessibility of these components is nowhere near the standard that would be expected of a real component library. Most developers choose to use a third-party component library, not least to avoid having to tackle those problems themselves. Some libraries that are compatible with Vue 3 are listed at the bottom of this page.

## Example components

* [Checkbox](./components/checkbox.html)
* [Radio](./components/radio.html)
* [Toggle Switch](./components/toggle-switch.html)
* [Radio Group](./components/radio-group.html)
* [Accordion](./components/accordion.html)
* [Tabs](./components/tabs.html)

## Patterns

* [Computed with v-model](./patterns/computed-v-model.html)
* [Global Properties](./patterns/global-properties.html)
* [Coupled Components with `provide`/`inject`](./patterns/coupled-components-with-provide-inject.html)

## Component libraries

These are some of the most widely used component libraries for Vue 3.

<!-- Ordered by npm downloads, except Vuetify -->

* [docs](https://2x.antdv.com/components/overview/) - [npm](https://www.npmjs.com/package/ant-design-vue) - Ant Design Vue 2
* [docs](https://element-plus.org/#/en-US/component) -  [npm](https://www.npmjs.com/package/element-plus) - Element Plus 1
* [docs](https://quasar.dev/vue-components/) - [npm](https://www.npmjs.com/package/quasar) - Quasar 2
* [docs](https://headlessui.dev/) - [npm](https://www.npmjs.com/package/@headlessui/vue) - Headless UI
* [docs](https://primefaces.org/primevue/showcase/#/setup) - [npm](https://www.npmjs.com/package/primevue) - PrimeVue 3
* [docs](https://oruga.io/documentation/) - [npm](https://www.npmjs.com/package/@oruga-ui/oruga-next) - Oruga UI
* [docs](https://next.vuetifyjs.com/en/introduction/why-vuetify/) - [npm](https://www.npmjs.com/package/vuetify) - Vuetify 3 (currently in alpha for Vue 3)
