<script setup>
import { ref } from 'vue'
import BasicRadio from './radio-group/radio.vue'
import BasicRadioGroup from './radio-group/radio-group.vue'

const radioValue = ref('First')
const options = ['First', 'Second', 'Third']
</script>
# Radio Group

## Radio Group Example

A radio group component acts as a wrapper around multiple radio components, with a single `v-model` on the wrapper:

```vue
<template>
  <basic-radio-group v-model="radioValue">
    <basic-radio value="First" />
    <basic-radio value="Second" />
    <basic-radio value="Third" />
  </basic-radio-group>
  <pre>Bound value: {{ radioValue }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import BasicRadio from './radio.vue'
import BasicRadioGroup from './radio-group.vue'

const radioValue = ref('First')
</script>
```

It would look something like this:

<live-example>
  <basic-radio-group v-model="radioValue">
    <basic-radio v-for="option in options" :value="option" />
  </basic-radio-group>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqVU8tOwzAQ/JVVLglS2tyjUIlKwAkJAeJCOJR4W4wa2zh2JFTl31nbaaI+aMslkdezs7MzySa6UWraWozyqGgqzZWBBo1Vs1LwWkltYAMal9DBUssaYoLGw9V80fDqacG47G+n2VhyrMeg91padQTv631TKSopGgPaXbwu1hbh2slI4juuGxNflaLIglwSSgeDtVovDNIJoPhwpBPfPFn5ce2klgzX12U0UpaRR+/ioXVXhPODygiyU6BnJJ3sHOrlk+sRVGQH8kJdaZzNpRUsNOawIetHA7quyBzErT6sG6XRruOncuTiCyuzF+XWaqWlashlhksu8NGdko3TtRUTFtT4bblGloPRZCHVulJ0lMdOZA/ObCILE5N4LJ6LjvF2ayUXyhowP8p56BnIw70gPSeV863X/t0nW2SB7S+/hi/ulGmVrEkGstQ51HJGQfzPP6/XR3i5iVhzM3Dd0qFJ3mKrGK2Qj3zxu2/pde24nA66g4gVGkiuxvnGahEkT0c+LyR1T3IBEm/l0OMkJUc0pOEDISX9FpcH3KylGX6Kw6i6X+0EmxM=)

`radio-group.vue` would use `provide` to communicate with `radio.vue`:

<<< @/components/radio-group/radio-group.vue

The `radio.vue` here is specially written to use `inject` instead of a `modelValue`:

<<< @/components/radio-group/radio.vue

Support for direct use of `v-model` with the `radio` component has been omitted from this example. That technique is shown in the [Radio example](./radio.html). The two can be combined by using a default value with `inject` and then checking whether that value is set.

## Vue Patterns

See [Coupled Components with `provide`/`inject`](../patterns/coupled-components-with-provide-inject.html)

Apart from the naming choices, there's nothing in this `radio-group.vue` implementation that assumes the children are radio buttons. It could be made to work with checkboxes, toggle switches or any similar components that involve picking from a list of options.

It could be argued that injecting a `computed` like this is violating one-way data flow for updates, or at least it gives that impression from the perspective of `radio.vue`. You could inject a separate `ref` and update function if you prefer.

<!--
## Missing Functionality

## Related Components
-->

## Alternatives

Another way to implement a radio group would be to use a prop to pass the options rather than a slot. e.g.:

```vue
<template>
  <basic-radio-group
    v-model="radioValue"
    :options="['First', 'Second', 'Third']"
  />
</template>
```

As the radio group is now responsible for creating the child components, it can use props and events for communicating with the children rather than `provide`/`inject`. This does simplify the implementation of the children, but it also forces the radio group to take on responsibility for laying out the radios. Whereas a slot allows other containers, dividers and text to be included along with the radios, the prop-based approach needs everything to be passed in via props. The slot-based approach could be seen as a better separation of concerns, though if you don't need the extra flexibility it may be unnecessary complexity.

Both approaches could be implemented in the same component.

## Libraries

Various libraries include a radio component, including:

- Vuetify - [Radio Group](https://next.vuetifyjs.com/en/components/radio-buttons/)
- Element Plus - [Radio Group](https://element-plus.org/en-US/component/radio.html)
- Quasar - [Option Group](https://quasar.dev/vue-components/option-group) (uses a prop-based approach for the options)
- Ant Design Vue - [Radio Group](https://www.antdv.com/components/radio)
- Headless UI - [Radio Group](https://headlessui.dev/vue/radio-group)
- Naive UI - [Radio Group](https://www.naiveui.com/en-US/os-theme/components/radio)
<!-- - PrimeVue - [RadioButton](https://primefaces.org/primevue/showcase/#/radiobutton) -->
