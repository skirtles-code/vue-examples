<template>
  <div>
    <input type="checkbox" v-model="checked">
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = computed({
  get () {
    return props.modelValue
  },
  set (newChecked) {
    emit('update:modelValue', newChecked)
  }
})
</script>