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

const radioValue = ref('First')
</script>
```

### Radio with `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

[SFC Playground](https://sfc.vuejs.org/#eNqdU01v1DAQ/SuWL0mlTXKPtpUoghsSAsQFc0jj2a7LxjZjJxVa5b8z4zQfLbASPcXz9WbezMtZvvG+HHqQtdyHFo2PIkDs/Y2ypvMOozgLhIMYxQFdJzJKzZbQbRNM+6nRxj1Fy2p1MSqlKts6G6JA9n1tTj2Ia0bMs/cGQ8yulN1XU2fqSUaEzp+aCGQJsb9jvCIVi6HonIbTtZIrmJJi4C85Ex7Z1X9XfgaaUb+q9MvR4KbSI9zcut7qKaEWZ1rfynwc9xWnMOeFp9zJaZ9F1/jyIThLxzgznHoKBCUJiT3so72yreQxRh/qqgqHlpf9EEqH9xW9SuxtNB2UELriDt1jACRgJXcbjIqcA2CBYDUg4CXMF6l/4DLsqOxIVJ4L4JKsWtf5PoJ+oa1ZMB6dD6QVDQdj4SNbedpBukfa57IUhJ+9QdC1iEjb4WkS1fkI/8yimUmAc0voTFw6viMj5N+y3mu6Ur12zb5vStJxP3CMCmdG05z3EEV+tTaPPdqJVbmCrbPSfkRu4fHtEdofoJdCHir/yxQ7sUnekLn0N2kzpAc9jaVRRfzlWcWJBav6udgTL3LXs9rTV8kJrJrQtkoefwM8f3+5)

<<< @/components/radio/radio.vue

### Radio without `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio2 v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

[SFC Playground](https://sfc.vuejs.org/#eNqdU99v0zAQ/ldM9pBMWpOBBGKmqWASPCNAvBAeUvvaek1sYztdR5X/nbOdNl0ZldhTcr+++7678y75oHW+6SChydQyI7QjFlynZ5UUrVbGkR0xsCA9WRjVkhRT00PotraCfam5UEM0L0aXR8XUSjIlrSPG+77XTQek9IhZ+kkY69LLSk6L2Bl7ouGg1U3tAC1CpnOPNwnFZDNpFYemrJIRrErIxn/RGfDQLv678isgR/6s0m8rYY4qtYHZreokjwmU7HB8o/K+nxY+xWs+6EyukjjPSVvr/M4qicvYebhqCNgqQSTv8T6cq7erZOWctrQo7IL5Yd/ZXJllgX+56aQTLeRg28ncqHsLBoGr5OoIo0DnBszEgORgwJzDPEn9C9fD9pXsUcrjAzh3Vky1unPAT25rfzDaKG3xVjgshITP3srCDMI+wjwPQzHwqxMGOCXO4HQ8myB1v4R/ZiFnPMB9S2iFO3T8iIbNfqSd5rglOnZNfx6VsBWwNWooD3Ky7JKUs0g/DwRIWZaDPaIcYVhogPnGsTKwFQuSvRjAI8rlXoZnmT1B6+q4J8JHeeefFxeb8BN/CWtqa/Gq52qLN033Ju5qkNmj+z1rBFujO/Iej7+IaEenHTpa99AAsUxp4OjJETxKmSuD50TJS70lVjWCk4ubm5t3Yyg8wc5S8lZvB/d2YsVvIZd0n4KuEFqBWK4cgr0Zcu8Fd6uDjXPA1oMMSuewUAYGGjVbL41/tJRcXF+zpwi8HkBxYQ4ktknTYHNhUekDsmkUWz8mcj3UtLVZCknJqxNiMR4X5Ec0S/o/DR3qGA==)

<<< @/components/radio/radio-without-input.vue

<!--
## Vue Patterns

## Missing Functionality

## Related Components
-->

## Libraries

Various libraries include a radio component, including:

- Vuetify - [Radio](https://next.vuetifyjs.com/en/components/radio-buttons/)
- Element Plus - [Radio](https://element-plus.org/en-US/component/radio.html)
- Quasar - [Radio](https://quasar.dev/vue-components/radio)
- Ant Design Vue - [Radio](https://www.antdv.com/components/radio)
- PrimeVue - [RadioButton](https://primefaces.org/primevue/radiobutton)
- Naive UI - [Radio](https://www.naiveui.com/en-US/os-theme/components/radio)
- Oruga - [Radio](https://oruga.io/components/Radio.html)
