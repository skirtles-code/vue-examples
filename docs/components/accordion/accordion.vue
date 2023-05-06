<template>
  <div class="accordion"><slot /></div>
</template>

<script setup>
import { computed, provide, ref } from 'vue'

// Holds the id of the currently expanded panel
const expanded = ref(null)

// Use `provide` to communicate with the child panels
provide('accordion-register', () => {
  const id = Symbol()

  return {
    expanded: computed(() => expanded.value === id),

    toggle () {
      expanded.value = expanded.value === id ? null: id
    },

    unregister () {
      if (expanded.value === id) {
        expanded.value = null
      }
    }
  }
})
</script>

<style scoped>
.accordion {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 240px;
}
</style>
