<template>
  <basic-accordion>
    <basic-accordion-panel title="First">
      First panel content
    </basic-accordion-panel>
    <basic-accordion-panel title="Second">
      <template v-for="i in 20">
        Second panel content {{ i }}
        <br v-if="i !== 20">
      </template>
    </basic-accordion-panel>
    <basic-accordion-panel title="Third">
      Third panel content
    </basic-accordion-panel>
  </basic-accordion>
</template>

<script setup>
import BasicAccordion from './accordion.vue'
import BasicAccordionPanel from './accordion-panel.vue'
</script>