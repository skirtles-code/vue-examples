<script setup>
import { ref } from 'vue'
import BasicToggleSwitch from './toggle-switch/toggle-switch.vue'

const switchValue = ref(true)
</script>
# Toggle Switch

## Toggle Switch Example

Using a toggle switch should be very similar to using a checkbox:

```vue
<template>
  <basic-toggle-switch v-model="switchValue" />
  <pre>Bound value: {{ switchValue }}</pre>
</template>
<script setup>
import { ref } from 'vue'
import BasicToggleSwitch from './toggle-switch.vue'

const switchValue = ref(true)
</script>
```

`v-model` is used to achieve a two-way data binding on the data value held in the parent.

<live-example>
  <basic-toggle-switch v-model="switchValue" />
  <pre>Bound value: {{ switchValue }}</pre>
</live-example>

The implementation includes a lot of CSS, but it is otherwise very similar to a checkbox:

<<< @/components/toggle-switch/toggle-switch.vue

<!--
## Vue Patterns

## Missing Functionality
-->

## Related Components

An individual toggle switch represents a choice between two values. This is effectively the same as a [Checkbox](./checkbox.html) (checked/unchecked) or a Toggle Button (pressed/unpressed).

Multiple toggle switches can be used to model multiple selections, often represented using an `Array` or `Set` containing the selected values. This can also be represented using a list, like a `<select multiple>`. Some dropdowns also support multiple selections, often in combination with a tag/chip/pill component to show the selected values when the list is collapsed.

## Libraries

Various libraries include a toggle switch component, including:

- Ant Design Vue - [Switch](https://2x.antdv.com/components/switch)
- Element Plus - [Switch](https://element-plus.org/en-US/component/switch.html)
- Quasar - [Toggle](https://quasar.dev/vue-components/toggle)
- PrimeVue - [InputSwitch](https://primefaces.org/primevue/showcase/#/inputswitch)
