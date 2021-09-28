<template>
  <fieldset>
    <legend>Live Example</legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'live-example'
}
</script>

<style scoped>
fieldset {
  border: 1px solid #777;
  border-radius: 6px;
  margin: 1rem 0;
  padding: 10px;
}

fieldset > ::v-deep(pre) {
  background: #eee;
  border: 1px solid #ccc;
  padding: 2px;
}

fieldset > ::v-deep(pre::after) {
  content: " ";
  visibility: hidden;
}

fieldset > legend {
  padding: 0 5px;
}

fieldset > :last-child {
  margin-bottom: 0;
}
</style>
