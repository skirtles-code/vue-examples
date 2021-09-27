<script setup>
import { ref } from 'vue'
import BasicRadio from './radio.vue'
import BasicRadio2 from './radio-without-input.vue'

const radioValue = ref('First')
const options = ['First', 'Second', 'Third']
</script>
# Radio

## Radio with `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

<<< @/examples/radio/radio.vue

## Radio without `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio2 v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

<<< @/examples/radio/radio-without-input.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a radio component, including:

- Ant Design Vue - [Radio](https://2x.antdv.com/components/radio)
- Element Plus - [Radio](https://element-plus.org/#/en-US/component/radio)
- Quasar - [Radio](https://quasar.dev/vue-components/radio)
- PrimeVue - [RadioButton](https://primefaces.org/primevue/showcase/#/radiobutton)
