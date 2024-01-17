<script setup>
import { onMounted } from 'vue'

if (typeof window !== 'undefined') {
  const hash =  window.location.hash

  if (['#component-libraries', '#component-libraries-notes'].includes(hash)) {
    onMounted(() => {
      window.location = './component-libraries' + hash
    })
  }
}
</script>
# Introduction

<div class="info custom-block">

Thank you to those on the [Vue Land Discord](https://chat.vuejs.org/) and elsewhere who inspired these ideas.

Recently I've been adding pages to the [Vue Land FAQ](https://vue-land.github.io/faq/) rather than putting them here, so if you want more content like this I suggest taking a look at that FAQ.

</div>

This collection of components and patterns is intended as a learning aid for those who are new to Vue.

Their primary purpose is to illustrate how core Vue 3 features can be combined to create standard UI components. The techniques used are intended to demonstrate idiomatic Vue usage for these types of scenarios. These examples have very limited functionality and are not intended to be production-ready components.

As with all code, trade-offs have been made and alternative approaches may be better in some cases. The explanation that accompanies each example attempts to discuss some of its shortcomings.

In pretty much all cases, the styling and accessibility of these components is nowhere near the standard that would be expected of a real component library. Most developers choose to use a third-party component library, not least to avoid having to tackle those problems themselves. Some libraries that are compatible with Vue 3 are listed at the bottom of this page.

## Example components

* [Checkbox](./components/checkbox)
* [Radio](./components/radio)
* [Toggle Switch](./components/toggle-switch)
* [Radio Group](./components/radio-group)
* [Accordion](./components/accordion)
* [Tabs](./components/tabs)

## Patterns

* [Computed with v-model](./patterns/computed-v-model)
* [Global Properties](./patterns/global-properties)
* [Coupled Components with `provide`/`inject`](./patterns/coupled-components-with-provide-inject)

## Guides

* [Working with Image Assets](./guides/working-with-image-assets)
* [Understanding the Vue Source Code](./advanced/understanding-the-vue-source-code)

## Exercises

* [Practice projects](./exercises/) for newcomers to Vue.

## Component libraries

* [Component Libraries](./component-libraries) - A list of the most popular component libraries for Vue 3.
