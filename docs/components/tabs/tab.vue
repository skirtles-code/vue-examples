<template>
  <div v-if="active" class="tab">
    <slot />
  </div>
</template>

<script setup>
import { inject, onUnmounted, reactive, toRef } from 'vue'

const props = defineProps({
  title: {
    required: true,
    type: String
  }
})

const register = inject('tabs-register')

const tab = reactive({
  title: toRef(props, 'title')
})

const { active, unregister } = register(tab)

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
}

.expanded {
  flex: auto;
}
</style>
