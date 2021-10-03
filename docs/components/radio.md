---
sidebarDepth: 4
---
<script setup>
import { ref } from 'vue'
import BasicRadio from './radio/radio.vue'
import BasicRadio2 from './radio/radio-without-input.vue'

const radioValue = ref('First')
const options = ['First', 'Second', 'Third']
</script>
# Radio

## Radio Examples

We're going to look at two examples of a radio component. The first example wraps a native `<input>` element to create the radio button. The second example uses CSS to give the impression of a radio button without using an `<input>`.

In both cases the example usage is much the same:

```vue
<template>
  <basic-radio v-model="radioValue" value="First" />
  <basic-radio v-model="radioValue" value="Second" />
  <basic-radio v-model="radioValue" value="Third" />
  <pre>Bound value: {{ radioValue }}</pre>
</template>

<script setup>
import { ref } from 'vue'
import BasicRadio from './radio.vue'

const radioValue = ref(true)
</script>
```

### Radio with `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

<<< @/components/radio/radio.vue

### Radio without `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio2 v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

<<< @/components/radio/radio-without-input.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a radio component, including:

- Ant Design Vue - [Radio](https://2x.antdv.com/components/radio)
- Element Plus - [Radio](https://element-plus.org/en-US/component/radio.html)
- Quasar - [Radio](https://quasar.dev/vue-components/radio)
- PrimeVue - [RadioButton](https://primefaces.org/primevue/showcase/#/radiobutton)
