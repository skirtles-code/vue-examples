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

[SFC Playground](https://play.vuejs.org/#eNqdVs1y2zYQfpWNchA9JSWl0zozrORpe+i1nSY9RT1QBCihIQEUABV7NHr3LH4IgrZsK/GMbAH77X77D59mv0m5OPZ0Vs7WulZMGtDU9PJuy1knhTLwe6VZ/bHaaWiU6GC+WMYbqzh/AnyCC7D10hOgaTwY2sm2MhRPAOudhRYGbbpzegOGmZZutrM/mNJmOwsAAHcGi6gFN5SboLmMqs/b+kBRhyTGoj9wLBqhEMKAcfhxlWAAvFrKCacTMDifR8x6p9AGa5yJN5vN1MZ6OQn8Snc/HphKvXXn10NPzjavCfcsn02q+Hz5T0jRyd5QkoNU4sgIzUHRqjbs6L41cA4V92XecvQJC+MRsLGQjPdtezNIrDvu3kOyT/+iaKJm67Bx8W3u4GRD8dDFsWr7INpyTPqWB5+yubVaKLpn2lA1zyfaVraQvT5k+M2RAbAGsjep2RuPDVzoQgADOCJAh02v+ARFy5ieLLuxfFNHsfzWSO4NAPR88BAQHiyBrSKGzjih9z44vXCHP5vog/1xAi1bVtPMyXN4F6KxPzaii/Qj0TQ4/WllU+8FoYXdH/x1RsFLE0vYEeq20hrb05qK3TmRHGhFqEr7f9cbI6LLEMfNlgsHzpsaxQlFEVQTaTmIT7EcruwYd2i/cwr/tcbUfUb4tMIRcYfDjDcLN3Y41Dg/jjKOKoZ2KcqdIA9pjLoVBpZPtIZvkx2AR20ekE7XQlKCNws3H65kO6EwfSW8k/egRcsIvK3r+hcrIgwboXoooWnpvbuxXwrCFMXgBLeN2fYdd6IDZfuDKXEVraQHf2HEHEr4KVy4Dl/4agXqqv68V6LnpEBDAp14S2+b26Zx6t6xYicwPd2V/smKEMb36AWi7WcVicfqPiZH2mbCeZHskTvWcLxUFWG9LuFnVLOfVRDXvdI2LCkYrlDl7rpK7RkvVMhWyFWHVyFf74f8xWDQ5IUwyoM4vpDJ5n1Tu6i8XujVV9HRwSHQAnORuhMFt4lXtjuvsX25ozDfr3WXDbVpxZcSqt4Iz4urw3Z1+tC89s4w/h8az0Hwf3iHTronZ3xpjPj72bcGHwFpnxRCG8bpX/aU+cVvJ7kc9p+i//cYATaVUT3FpeyW6oNExAejMH/J7htMx329CQ4+fmkSrNs947uWeuC8z5yfOczdpdVMmYYdlqevxNkZ9If4eCUZykbsFQs7/F/iebazdLuO+zvZXtdurKqucdiwLwpZcdr6fH/DhhrGYGrlB7hsOAyBEdItg+9eXxdXyfNr4em4Taf/2jl7gdwPXJiikXflmAd6z0bvMSOEEs84UUzH7/wVyrD9zA==)

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
