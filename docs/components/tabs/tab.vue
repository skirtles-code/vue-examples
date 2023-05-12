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
