<script setup>
import { ref } from 'vue'
import BasicToggleSwitch from './toggle-switch/toggle-switch.vue'

const switchValue = ref(true)
</script>
# Toggle Switch

:::info
This page has not yet been updated to use the `defineModel` macro, which was added in Vue 3.4. The techniques described here should still work, but in some cases it might be better to use `defineModel` instead.
:::

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

[SFC Playground](https://play.vuejs.org/#eNq9VE2P2jAQ/SvT9LAgkQC72rZKWdSu1HulVr2UHoztEAvHdm0HukL8945tCJ/bSq20EgI8M543771JNtlHY4pVy7MymzhqhfHguG/NdKZEY7T1sAHLK9hCZXUDN1h606UeiRP0q14sJP+yFp7Wu6JieJEJGHhxpqhWDjFi8BuRLYeHANDztuX9mZoM0xSIjwfPGyOJ53gCmMxD09zHrnnqAKu80YzLh1l21HKWwTBdMZZPH3WrGKxCooTN5gR7u50MQ00A7sCyQXZ1/isaJTbGauOQB+OVUPxzOPU2AT/OFpEQOQQAuf5sheWshMB4kIL+yWDFo9aSE+QNsJ2pLaqxB+CN8F3/T3hwve83rWE4bXnAuPlxdCXJhJd6fXiYJvTQpnfl3gBeRQrFIYadcIY/ucHEKg1PJXEODTgxZpalZLnPboDWnC4D8QMK8tzVfaBS0GXXJYWDiUe+xCGcf0JajmrDGUaK03WINOeELhc2uF7Ca8bY+xjUlnGbW8JE60oYFW/vebPL/MpdTZheh/DozS0mrvyxiznpjQaw+xSjd30QChchNqGtddqWYLRQntsYqyT/VYLSisdjzcWi9iWMiz2y0U54oVWJW4EMxSoVekvUPnHgklMttYXx/ahxsWwtmK9LuIvN0KxzMcpyzitt+RVRqqpK1A/dRUMWuINBHyLzRfjlyveosBT1Jh4Z3wXJ9r+Dc0H64ftCpPs+jHnTv25BFPY/PUjqaxRdoba4N1mMMOFwaZ5QQKnp8kz/DlbyCgOjYtxFDpaQudOy9TtLtDmtO/YodLn05QhmLaTMaU1UUDhUd4btnolzi5LXaBQh9K66PS9/ztmXMDFJNu68u7Z4tV5xuxvuL8ZGRS8Qx7eHZ+tZgJdWAWtPlvmfNhaZJU74ag1vsmm2/Q3F9nG4)

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

- Vuetify - [Switch](https://next.vuetifyjs.com/en/components/switches/)
- Element Plus - [Switch](https://element-plus.org/en-US/component/switch.html)
- Quasar - [Toggle](https://quasar.dev/vue-components/toggle)
- Ant Design Vue - [Switch](https://www.antdv.com/components/switch)
- Headless UI - [Switch](https://headlessui.dev/vue/switch)
- PrimeVue - [InputSwitch](https://primefaces.org/primevue/inputswitch)
- Naive UI - [Switch](https://www.naiveui.com/en-US/os-theme/components/switch)
- Oruga - [Switch](https://oruga.io/components/Switch.html)
