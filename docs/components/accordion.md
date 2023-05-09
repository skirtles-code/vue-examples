<script setup>
import AccordionExample from './accordion/example.vue'
</script>
# Accordion

## Accordion Example

The accordion presented here is made up of two components. There is an outer `accordion` component that acts as a container, with `accordion-panel` components as children that can be expanded or collapsed.

Usage might look something like this:

<<< @/components/accordion/example.vue

While the 3 children given in this example are static, they could also be created dynamically using `v-for` over a suitable array.

Running this example we get:

<live-example>
  <accordion-example />
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqlVE1v2zAM/StcekiK5aufA7ykW3cYdizQ9ZZDHUmOtcqSJ8lpgyD/fZRkO/bidOt2SSyKfHykHrnt3eb5eF2wXtSbGaJ5bsEwW+Q3C8mzXGkLX2LDyS0hSlOuJCRaZdAfT9pmB9E/EnIXSyaOxPm7Mng2CQQwNR4sy3IRW4YngNnSRY3iKswbD82j3Key3Ao2X/S+cm3solc6A/gzBB+ipGXSljiTTqC/y3LPEIs20tTUYT1KlEYXDlzC+bThAxDC2mxguwUOu93ea7bUiMITD/JuPm+jzCatLv1nId9Trpt1+PNb23Vwh9YGzd6wdyic49rbYuIsLyyjQ8i1WnPKhqBZArtST0E5CzmZwDclqAGbMuAUVOK/SKE10hYbYC/IkbKynoXEglALtXXuUAeyEOK0hHswDB7LnI9glWOSFZIT97DP3KYhQcpFiWkWsnQf9Ped0WzFjWW6P4TBKcxvYOu6FLIjzzncb7KlEgOfFpCFLbQMTlDTi+o2DAJIdTFex6JgMEdhcHo6DBiAbFcrwVzCEmgPVUV0Q8AncD2I8DME7mrMQlaltHB5AoNuNnufjuwuS3Vdyt3/4c8OW/HaKqB8DUTExqBk6z6jbGdGKAuTm9kEPdqq8yjGbrAnhqicUbSM69hAdIkHpiM4y1/AKIG9OCGEfHRXlBvE2USQCPbiLe5jRLlmxCKAex5RZNJfpYyvUhvBxXSaB+dnTm0awfllMGCJWJ4jczgN9Tp8bSS4/IF5h6Dkg8xUgYNJD+YhCAz1mBvsNmUJl+zOnQa+WD/yUfVCmv0ssBaUmdUFwxf3Gtrk6HFvNZerxstU0LUY8K09n07RNwK2tQiGpT6HTU3t/AiGQxiGRnmDveO/iCOsp0UPoupqTwbrqjZeKzhlMcoBYz4TwckTWgJp9MYl7fuHi7rSWh1e7uoKHeMrwKWimw6Vuo35Rr2Wa9s/3hukiQ/YgfIeuoGzWK+4HFmV+5Go40NfypGJydNK4xPREWZRODwn7Dq5ThJP5JWBqrzPyQW7mgZToY2z5Yrji2tvEyjaUTVPZ+NLbwzEIhgFVoDLl1LUaARXDZqu20dJJh8S8meSrpERxIVVrbxTn3mfXq2ZToR6rl0DgVpfnsTvWNjZqi5XfnMl7H4BQxxFKw==)

The code for `accordion.vue`:

<<< @/components/accordion/accordion.vue

The corresponding `accordion-panel.vue` is:

<<< @/components/accordion/accordion-panel.vue

## Vue Patterns

See [Coupled Components with `provide`/`inject`](../patterns/coupled-components-with-provide-inject.html).

<!--
## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include an accordion component, or a component that can achieve a similar effect. These include:

- Vuetify - [Expansion Panel](https://next.vuetifyjs.com/en/components/expansion-panels/)
- Element Plus - [Collapse](https://element-plus.org/en-US/component/collapse.html)
- Quasar - [Expansion Item](https://quasar.dev/vue-components/expansion-item)
- Ant Design Vue - [Collapse](https://www.antdv.com/components/collapse)
- Headless UI - [Disclosure](https://headlessui.dev/vue/disclosure)
- PrimeVue - [Accordion](https://primefaces.org/primevue/accordion)
- Naive UI - [Collapse](https://www.naiveui.com/en-US/os-theme/components/collapse)
- Oruga - [Collapse](https://oruga.io/components/Collapse.html)
