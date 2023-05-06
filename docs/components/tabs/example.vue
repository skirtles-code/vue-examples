<template>
  <basic-tabs>
    <basic-tab title="First">
      First tab content
    </basic-tab>
    <basic-tab title="Second">
      <template v-for="i in 20">
        Second tab content {{ i }}
        <br v-if="i !== 20">
      </template>
    </basic-tab>
    <basic-tab title="Third">
      Third tab content
    </basic-tab>
  </basic-tabs>
</template>

<script setup>
import BasicTabs from './tabs.vue'
import BasicTab from './tab.vue'
</script>
