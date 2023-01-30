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

[SFC Playground](https://sfc.vuejs.org/#eNq9VF1v0zAU/SsmPKyVmrTdNEChq2AS70ggXggPrnOTeE1sYzvtpqr/nWs7TT83JJAmVW19fX2Ozzk32USflUpWLURpNDNMc2WJAduqeSZ4o6S2ZEM0FGRLCi0bcoWtV/3WPTWcfZdlWcO3Nbes6pqS8dmO48CDmWBSGOTwxR+0boHcOYKB1S0MMzEbh1sgPy4sNKqmFnBFyGzhQGPrUeOAQFZxI3Oo77LoADKLyDgcURrm97IVOVm5jZRsNkfc2+1s7HoccU8WjaIgMG6oSh6MFOjOxuFl3YbJIoRyFVdDaW6dRZW1yqTjsSmY0/tgEqnLMf5LdCssbyAB08QLLdcGNAJn0egAY4zFFehYg8hBg34J86T1DNfBbjOxRSkXo7gQdwhGaakMRpJDwQV8dauBF+pt9qb1yjX8brmGPCUuvE6KfVLYcS9lDRQjDNfAYHcE0HDb43/BhRn8vGpVjsane46rXwdHQuJ4aDAkd/PA7mAGF86NyBsvIdnXEAnv8NJg5XwVLs9qagzO0tGMBTcJSXe7G8IqYEsnfM+COru+T6zmbNmjhLKbx4MR85cw9gllGSYV5FhJjifby1xQtiy1G+CUvM3z/KMvSo2px5rmvDUpmSTvb6Hpdh5jU9Fcrl158u4aNy780eWCDiYj0n2SyYch4QIHwYOwVhupU6IkFxa0rxU1PKZESAF+WQEvK5uSabJjVtJwy6VIcSpQIV+FRqup2G3stcRM1lKT6e2kMb5tzXNbpeTGg2FYp2ak6QIKqeGCKUVRBOl7dN7QEmfQ+UPruHS/IOyAcc3Qb2pR8Y2zbPc7OjVk6L7PTLodkik0w8sReGP/M4PgvkTTBXqLcxP5Ss4NDs0TGlhLtjzxv6etocDCJJn2lX0kdGFk3douEqmO+w4zcijnuRzQrHldx6yiwjnsuvvAumfiNKKQNQZFKbsprk/bn0v2NUIMlk377C4NXiXxPdtd7i/BekfPGKfX+2frWYLXdgF7j4b5nyYWlQVN+Gp1b7J5tP0DcEO4HQ==)

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
