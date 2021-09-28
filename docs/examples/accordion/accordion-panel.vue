<template>
  <div class="accordion-panel" :class="{ expanded }">
    <div class="header" @click="toggle">{{ title }}</div>
    <div v-if="expanded" class="body"><slot /></div>
  </div>
</template>

<script setup>
import { inject, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    required: true,
    type: String
  }
})

const register = inject('accordion-register')

const { expanded, toggle, unregister } = register()

onUnmounted(unregister)
</script>

<style scoped>
.accordion-panel {
  display: flex;
  flex-direction: column;
}

.accordion-panel + .accordion-panel {
  margin-top: 1px;
}

.header {
  background-color: #e6f6ff;
  border: 1px solid #ccc;
  cursor: pointer;
  margin: -1px;
  padding: 5px;
}

.body {
  background-color: #f7fcff;
  border: 1px solid #ccc;
  flex: auto;
  margin: 0 -1px -1px;
  overflow: auto;
}

.expanded {
  flex: auto;
  min-height: 0;
}
</style>