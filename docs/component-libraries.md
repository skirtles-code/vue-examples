---
description: Popular Vue 3 component libraries
---
# Component Libraries

Listed below are some of the most widely used component libraries for **Vue 3**.

## Styled Vue components

These libraries all provide large collections of ready-to-use Vue components, complete with styling.

The monthly downloads should not be trusted as a way to judge the quality of a library. Specifically:
* Some of these libraries are much older than others and will benefit from historical inertia.
* Some used the same npm package name for the Vue 2 version of the library, while others did not. The final column of the table attempts to indicate whether the monthly downloads also include Vue 2.

<style>
img[src^="https://img.shields.io"] {
  display: inline-block;
  vertical-align: middle;
}

td > img {
  display: inline-block;
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
      <td><a href="https://vuetifyjs.com/en/introduction/why-vuetify/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/vuetify" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/vuetify?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Element Plus</td>
      <td><a href="https://element-plus.org/en-US/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/element-plus" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/element-plus?color=%235588cc&label="></td>
      <td><a href="https://www.npmjs.com/package/element-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/element-ui?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>PrimeVue</td>
      <td><a href="https://primevue.org/installation" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/primevue?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Quasar</td>
      <td><a href="https://quasar.dev/components" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/quasar" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/quasar?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Ant Design Vue</td>
      <td><a href="https://www.antdv.com/components/overview/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/ant-design-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/ant-design-vue?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Vant<sup><a href="#component-libraries-notes">2</a></sup></td>
      <td><a href="https://vant-ui.github.io/vant" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/vant" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/vant?color=%235588cc&label="></td>
      <td><img :src="tick" alt="Tick">&nbsp;Yes</td>
    </tr>
    <tr>
      <td>Naive UI</td>
      <td><a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/naive-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/naive-ui?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>bootstrap-vue-next<sup><a href="#component-libraries-notes">3</a></sup></td>
      <td><a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/bootstrap-vue-next" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/bootstrap-vue-next?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>Vuestic UI</td>
      <td><a href="https://ui.vuestic.dev/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/vuestic-ui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/vuestic-ui?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>Flowbite Vue<sup><a href="#component-libraries-notes">4</a></sup></td>
      <td><a href="https://flowbite-vue.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/flowbite-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/flowbite-vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>Oruga UI<sup><a href="#component-libraries-notes">5</a></sup></td>
      <td><a href="https://oruga.io/documentation/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/@oruga-ui/oruga-next" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/@oruga-ui/oruga-next?color=%235588cc&label="></td>
      <td><a href="https://www.npmjs.com/package/@oruga-ui/oruga" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/@oruga-ui/oruga?color=%235588cc&label="></td>
    </tr>
  </tbody>
</table>

<div id="component-libraries-notes"></div>

**Notes:**

1. Vuetify 3 is compatible with Vue 3. Vuetify 3.0.0 was released at the end of October 2022 and is still missing some important features relative to earlier versions.
2. Vant targets mobile browsers and isn't generally suitable for desktop applications.
3. bootstrap-vue-next started out as bootstrap-vue-3, <a href="https://www.npmjs.com/package/bootstrap-vue-3" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/bootstrap-vue-3?color=%235588cc&label=">. It was an independent rewrite of BootstrapVue: <a href="https://bootstrap-vue.org/" target="_blank" rel="noopener noreferrer">docs</a>, <a href="https://www.npmjs.com/package/bootstrap-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/bootstrap-vue?color=%235588cc&label=">, which was a very popular Vue 2 component library. In late 2022, BootstrapVue announced work on Vue 3 compatibility, <https://bootstrap-vue.org/vue3>. In early 2023, bootstrap-vue-3 was renamed to bootstrap-vue-next.
4. Flowbite Vue provides Vue components built using Flowbite. Flowbite itself is conceptually similar to Bootstrap or Buefy and is framework-agnostic.
5. The Vue 2 library Buefy: <a href="https://buefy.org/" target="_blank" rel="noopener noreferrer">docs</a>, <a href="https://www.npmjs.com/package/buefy" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/buefy?color=%235588cc&label=">, combines Vue with Bulma. The lead maintainer of that project also maintains Oruga UI and recommends using Oruga as the successor to Buefy for Vue 3.

## Unstyled Vue components

These libraries provide Vue components without styling. They can be used to build your own component library.

<table>
  <thead>
    <tr><th>Name</th><th>docs</th><th>npm</th><th>Vue 2?</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Headless UI</td>
      <td><a href="https://headlessui.dev/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/@headlessui/vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/@headlessui/vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
    <tr>
      <td>Radix Vue</td>
      <td><a href="https://www.radix-vue.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/radix-vue" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/radix-vue?color=%235588cc&label="></td>
      <td><img :src="cross" alt="Cross">&nbsp;No</td>
    </tr>
  </tbody>
</table>

There are also collections of example Vue components that use these two libraries:

* [Tailwind UI](https://tailwindui.com/) - Headless UI and Tailwind CSS.
* [shadcn-vue](https://www.shadcn-vue.com/) - Radix Vue.

## CSS frameworks

The CSS frameworks listed here are not specifically tied to Vue.

daisyUI extends Tailwind CSS, adding utility classes for writing components.

Flowbite is conceptually similar to Bootstrap or Bulma, but built using Tailwind CSS.

<table>
  <thead>
    <tr><th>Name</th><th>docs</th><th>npm</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Tailwind CSS</td>
      <td><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/tailwindcss" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/tailwindcss?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Bootstrap</td>
      <td><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/bootstrap" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/bootstrap?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Bulma</td>
      <td><a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/bulma" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/bulma?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>daisyUI</td>
      <td><a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/daisyui" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/daisyui?color=%235588cc&label="></td>
    </tr>
    <tr>
      <td>Flowbite</td>
      <td><a href="https://flowbite.com/" target="_blank" rel="noopener noreferrer">docs</a></td>
      <td><a href="https://www.npmjs.com/package/flowbite" target="_blank" rel="noopener noreferrer">npm</a> <img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/flowbite?color=%235588cc&label="></td>
    </tr>
  </tbody>
</table>

All of these libraries can be used with Vue, but some of them include their own JavaScript code to add interactivity, which may clash with Vue. You'll likely need to implement that interactivity yourself instead, or use one of the Vue integrations listed earlier in [Styled Vue components](#styled-vue-components).
