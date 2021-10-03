<template>
  <div>
    <input type="radio" v-model="radioModel" :value="value">
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  value: {
    required: true
  }
})

const radioModel = inject('radioModel')
</script>