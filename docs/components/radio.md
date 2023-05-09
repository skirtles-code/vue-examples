---
outline: 'deep'
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

[SFC Playground](https://play.vuejs.org/#eNqdUk1PwzAM/StWLi3Stt6rbhJDcENCgLhQDqXxWMSahDQpQlX/O05KP4ZgElyS2LGf37PdsnOtV41DlrKsLo3QFmq0Tm9yKSqtjIUWDO6gg51RFUQUGo1f26IW5W3Bhfr6XSWTy6NSaC5LJWsLxvseioNDWHvEOLoSprbRWS6zpK9MNcmwWOlDYZEsgOzZ4y1DMjTLSnE8rHM2geUMGn+TM+CRnfw58w6JI/9X6v1emFmmNrjZKid5H5BCS+2blHddlvgQr3nUyRbsuGunZlGqSjuL/NtAhi5ro3RNDea4ExJvvBW3nlkQEUgQJ+8AGsKbEwZ5CtaQJvJ1C38OzH+NymVHUxtKYiXsWPGSjDp+jJzmJC2dqkZPs5TQkWv/R4mDop7nC1qIz6bi1hnZq1pNYBNX6g/EEt8v9li+Ih8TPan4BxYLmAXPxJxaQS6a8KCnkEQV7If2ow8q/Cocb0jQRe50WJFw56wHS3q0+fi7T5caOVQ=)

<<< @/components/radio/radio.vue

### Radio without `<input>`

<live-example>
  <template v-for="option in options">
    <basic-radio2 v-model="radioValue" :value="option" />
  </template>
  <pre>Bound value: {{ radioValue }}</pre>
</live-example>

[SFC Playground](https://play.vuejs.org/#eNqdUs2O0zAQfpUhe0gq9Q8kEDVNBSvBGQHiQjik9rS1msTGdkqXKu/OOE6a7GpZib20mfHM9zMzl+iD1vNTjRGL1pYbqR1YdLXeZJUstTIOLmBwBw3sjCohptL4+nSbW8m/5EKq7nW+GFIelUqziqvKOjA+9z0vaoTUIybxJ2msiydZtV4EZuKkwGGpi9whRQDrrcebtc1wmpVKYJFm0QCWRXDy/5Rs8She/HfnVySN4lmt3w7SjDq1wc2tqisRChhcaHyD86ZZL3yJ93z1GU2j+1N7ahdclbp2KB4spJ+yNkpbGrDAnazws4+Si1fWmmhFkCafAFrCr1oaFAycIU+Ua6b+t1f+z6qsamhrPSWW0l0ZP1Jgkx9xrQVZYwNr/HPUwg/Ij+QhvdpJkgmkmyB/3gqANE27eEAZYVgskHvi0NmqlTtIXnTgAWXS2/Aqk0dkTcecBB/sPX2TQp7aj/AJvMitpVPYqjMdAutD2lVns6H0e15IfqR00D1czCKgje6hZbTurkCwXGkUlJkTeLCyVUagYfBSn8GqQgq4Wa1W74an9m5ry+CtPnfp88zKP7Las76EUu3TAeX+4AjsTVf7Wwp3uMY0B6LubDC2xZ0y2MnI+XFv/KUzuFku+WMCXnegtDCHFdHEcRsLacnpHakpFD/eF7Lsesrc7GXF4NUDYeE9LMiPaBM1fwGqtaOz)

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
