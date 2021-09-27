<script setup>
import { ref } from 'vue'
import BasicToggleSwitch from './toggle-switch.vue'

const switchValue = ref(true)
</script>
# Toggle Switch

## Toggle Switch Example

<live-example>
  <basic-toggle-switch v-model="switchValue" />
  <pre>Bound value: {{ switchValue }}</pre>
</live-example>

<<< @/examples/toggle-switch/toggle-switch.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a toggle switch component, including:

- Ant Design Vue - [Switch](https://2x.antdv.com/components/switch)
- Element Plus - [Switch](https://element-plus.org/#/en-US/component/switch)
- Quasar - [Toggle](https://quasar.dev/vue-components/toggle)
- PrimeVue - [InputSwitch](https://primefaces.org/primevue/showcase/#/inputswitch)
