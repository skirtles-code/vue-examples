<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'

const props = defineProps({
  modelValue: {
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

provide('radioModel', computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
}))
</script>
