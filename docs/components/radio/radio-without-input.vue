<template>
  <div>
    <div class="box" :class="{ checked }" @click="select" />
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

const checked = computed(() => props.value === props.modelValue)

const select = () => {
  if (!checked.value) {
    emit('update:modelValue', props.value)
  }
}
</script>

<style scoped>
.box {
  border: 1px solid #999;
  border-radius: 8px;
  height: 16px;
  width: 16px;
}

.checked::before {
  background: #00c;
  border-radius: 5px;
  content: '';
  display: block;
  height: 10px;
  margin: 2px;
  width: 10px;
}
</style>
