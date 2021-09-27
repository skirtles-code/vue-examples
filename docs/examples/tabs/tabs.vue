<!-- tabs.vue -->
<template>
  <div class="tabs">
    <div class="header">
      <!-- TODO: key -->
      <button
        v-for="tab in tabs"
        class="tab-button"
        :class="{ active: tab === active }"
        @click="activate(tab)"
      >{{ tab.title }}</button>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, provide, reactive, ref } from 'vue'

const active = ref(null)
const tabs = reactive([])

const activate = tab => {
  active.value = tab
}

provide('tabs-register', tab => {
  tabs.push(tab)

  if (!active.value) {
    activate(tab)
  }

  return {
    active: computed(() => active.value === tab),

    unregister () {
      const index = tabs.indexOf(tab)
      tabs.splice(index, 1)

      if (active.value === tab) {
        activate(tabs[0])
      }
    }
  }
})
</script>

<style scoped>
.tabs {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 400px;
}

.header {
  background-color: #e6f6ff;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 2px 2px 0;
}

.tab-button {
  background: #fff;
  border: 1px solid #ccc;
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  margin-right: 2px;
  min-width: 70px;
  padding: 5px;
}

.tab-button:hover {
  background-color: #f7fcff;
}

.active {
  background-color: #f7fcff;
  margin-bottom: -1px;
  padding-bottom: 6px;
}

.body {
  background-color: #f7fcff;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
}
</style>