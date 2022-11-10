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

## Guides

* [Working with Image Assets](./guides/working-with-image-assets.html)
* [Understanding the Vue Source Code](./advanced/understanding-the-vue-source-code.html)

## Component libraries

These are some of the most widely used component libraries for **Vue 3**.

The monthly downloads should not be trusted as a way to judge the quality of a library. Specifically:
* Some of these libraries are much older than others and will benefit from historical inertia.
* Some used the same npm package name for the Vue 2 version of the library, while others did not. The final column of the table attempts to indicate whether the weekly downloads also include Vue 2.

<style>
img[src^="https://img.shields.io"] {
  vertical-align: middle;
}
</style>
<script setup>
const cross = './images/cross.svg'
const tick = './images/tick.svg'
</script>

<table>
  <thead>
    <tr><th>Name</th><th>docs</th><th>npm</th><th>Vue 2?</th></tr>
  </thead>  
  <tbody>
    <tr>
      <td>Vuetify<sup><a href="#component-libraries-notes">1</a></sup></td>
      <td><a href="https://next.vuetifyjs.com/en/introduction/why-vuetify/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/vuetify" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/vuetify?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Element Plus</td>
      <td><a href="https://element-plus.org/en-US/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/element-plus" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/element-plus?color=%235588cc&label="></td>
      <td><a href="https://www.npmjs.com/package/element-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/element-ui?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Quasar</td>
      <td><a href="https://quasar.dev/vue-components/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/quasar" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/quasar?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Ant Design Vue</td>
      <td><a href="https://www.antdv.com/components/overview/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/ant-design-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/ant-design-vue?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Headless UI<sup><a href="#component-libraries-notes">2</a></sup></td>
      <td><a href="https://headlessui.dev/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/@headlessui/vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/@headlessui/vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>PrimeVue</td>
      <td><a href="https://primefaces.org/primevue/setup" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/primevue?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Naive UI</td>
      <td><a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/naive-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/naive-ui?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>bootstrap-vue-3<sup><a href="#component-libraries-notes">3</a></sup></td>
      <td><a href="https://cdmoro.github.io/bootstrap-vue-3/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/bootstrap-vue-3" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/bootstrap-vue-3?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>Oruga UI<sup><a href="#component-libraries-notes">4</a></sup></td>
      <td><a href="https://oruga.io/documentation/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/@oruga-ui/oruga-next" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/@oruga-ui/oruga-next?color=%235588cc&label="></td>
      <td><a href="https://www.npmjs.com/package/@oruga-ui/oruga" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/@oruga-ui/oruga?color=%235588cc&label="></td>
    </tr>
  </tbody>
</table>

<!-- TODO: Investigate Vant: https://www.npmjs.com/package/vant -->

<div id="component-libraries-notes"></div>

Notes:

1. Vuetify 3 is compatible with Vue 3. Vuetify 3.0.0 was released at the end of October 2022 and is still missing some important features relative to earlier versions.
2. Headless UI isn't really comparable to the other libraries on the list, but it does attempt to solve similar problems and it is easily popular enough to warrant a mention.
3. bootstrap-vue-3 is an independent rewrite of BootstrapVue: <a href="https://bootstrap-vue.org/" target="_blank" rel="noopener noreferrer">docs</a>, <a href="https://www.npmjs.com/package/bootstrap-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/bootstrap-vue?color=%235588cc&label=">, which was a very popular Vue 2 component library. BootstrapVue recently announced work on Vue 3 compatibility, <https://bootstrap-vue.org/vue3>. Unfortunately, this will mean that the name 'BootstrapVue 3' is ambiguous and could refer to either library.    
4. The Vue 2 library Buefy: <a href="https://buefy.org/" target="_blank" rel="noopener noreferrer">docs</a>, <a href="https://www.npmjs.com/package/buefy" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm weekly downloads" src="https://img.shields.io/npm/dm/buefy?color=%235588cc&label=">, combines Vue with Bulma. The lead maintainer of that project also maintains Oruga UI and recommends using Oruga as the successor to Buefy for Vue 3.
