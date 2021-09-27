<template>
  <div>
    <div class="box" :class="{ checked: modelValue }" @click="toggle" />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.box {
  border: 1px solid #999;
  border-radius: 1px;
  height: 16px;
  width: 16px;
}

.checked::before {
  border: solid #00c;
  border-width: 0 0 2px 2px;
  content: '';
  display: block;
  height: 5px;
  margin: 3px;
  transform: rotate(-45deg);
  width: 8px;
}
</style>