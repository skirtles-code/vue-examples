<script setup>
import TabsExample from './tabs/example.vue'
</script>
# Tabs

## Tabs Example

There are various ways to split a tabbed UI up into components. In this example we're going to use two components, an outer container called `tabs` and an inner container for each child called `tab`:

<<< @/components/tabs/example.vue

<live-example>
  <tabs-example />
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqNVstu2zoQ/ZWpurACSLZ7cW8K6NpB20W3LfpY1V3IImWzlUiWpNwEhv+9w4doKnGaGJAtcs7MnHlw6GP2Vsr5YaBZla10o5g0oKkZ5M2Gs14KZeBdrVnzpd5qaJXoYTZfxB2rOHsAfIALsNXCO0DTuDC0l11tKK4AVlsLLQ3adOt0BwwzHV1vsvdMabPJAgDArcEiGsEN5SZoLqLq47Y+U9QhibHIBw5lKxRCGDAO/ywTDIBXS33C8QgMTqczZrVVaIO1zsSL9XpqY7WYBP5Mul/2TKVs3frp0JO1zWviOyuySRUfL/8RXfRyMJQUIJU4MEILULRuDDu4txZOoeK+zBuOnLAwHgFrC8n50HVXo8TScfsekn/7jqKJmq3D2sW3voGjDcVD54e6G4JowzHpGx445TNrtVR0x7ShalZMtK1sLge9z/HNOQNgLeQvUrNXHht8IYUABnCOAAmbQfEJilYxPXl+Zf1NiWL5rZHCGwAY+MgQEB4sga0ihs44obc+OD13iw9t5GA/TqBlxxqaO3kBr0I09mMjuuj+7GganP62tKn3gtDC7ge/Tij424kl7ABNV2uN7WlNxe6cSPa0JlSl/b8djBGRMsTjZsuFB86bOosTF2VQTaTVKD7GcriyY9yh/U4p/E2DqfuJ8GmFI+IGDzPuzN2xw0ON58e5jEcVQ7sU5VaQuzRG3QkDiwda49tkBuBSmzt0pxshKcGduTsfrmRboTB9FbySt6BFxwi8bJrmfysiDBuhvqug7eit27EvJWGKYnCC28bshp470Z6y3d5UOIqW0oN/M2L2FfwbNlyHz321guu6+blTYuCkREMCSbyk1+112zp1T6zcCkxP/0x+siaE8R2yQLR9ltHxubr3naPbduLzorN7dKzhuKlqwgZdwX+oZp9lEDeD0jYsKRiOUOX2+lrtGC9VyFbIVY9bIV+vx/zFYNDkhTCqvTj8JZPt67ZxUXm90KtPoiPBMdASc5HSiYLrhJXtzufYvtxRmO+nusuG2nbidwX1YIT3i6PDdnV60Tx1zzD+A40XIPhX3iNJd+WcbxojPj161+AlIO2VQmjLOP1oV7kf/PYkV+P8U/TXgBFgUxk1UBzKbqjeSUR8Ngrzl8y+0XSc1+tA8P5Nk2Dd7DnfaykDxz53PAuYuU2rmXoaZ1iR3hInZ9Av4uWVZCg/Y58xsMP/Eu9nk6XT9Ty/k+l1cWJlpz/lxGh7)

The `title` prop is used to pass the text to show on the button, with a slot for the content.

The code for `tabs.vue` looks long, but a lot of it is CSS:

<<< @/components/tabs/tabs.vue

`tab.vue` doesn't need much code:

<<< @/components/tabs/tab.vue

## Vue Patterns

See [Coupled Components with `provide`/`inject`](../patterns/coupled-components-with-provide-inject.html)

<!--
## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a tabs component, including:

- Vuetify - [Tabs](https://next.vuetifyjs.com/en/components/tabs/)
- Element Plus - [Tabs](https://element-plus.org/en-US/component/tabs.html)
- Quasar - [Tabs](https://quasar.dev/vue-components/tabs) and [Tab Panels](https://quasar.dev/vue-components/tab-panels)
- Ant Design Vue - [Tabs](https://www.antdv.com/components/tabs)
- Headless UI - [Tabs](https://headlessui.dev/vue/tabs)
- PrimeVue - [TabView](https://primefaces.org/primevue/tabview)
- Naive UI - [Tabs](https://www.naiveui.com/en-US/os-theme/components/tabs)
- Oruga - [Tabs](https://oruga.io/components/Tabs.html)
