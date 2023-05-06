<template>
  <div>
    <input type="radio" v-model="radioModel" :value="value">
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    required: true
  },
  value: {
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const radioModel = computed({
  get () {
    return props.modelValue
  },
  set (newChecked) {
    emit('update:modelValue', newChecked)
  }
})
</script>
