<!-- user-edit-form.vue -->
<template>
  <form>
    <input v-model="model.firstName">
    <input v-model="model.lastName">
    <input v-model="model.city">
    <input v-model="model.country">
    <input v-model="model.email">
    <input v-model="model.phone">
  </form>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: Object
  }
})

const emit = defineEmits(['update:modelValue'])

const model = computed(() => {
  return new Proxy(props.modelValue, {
    set (obj, key, value) {
      emit('update:modelValue', { ...obj, [key]: value })
      return true
    }
  })
})
</script>
