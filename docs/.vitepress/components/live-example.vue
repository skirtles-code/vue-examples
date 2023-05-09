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

:deep(select), :deep(button), :deep(input) {
  background: revert;
  border: revert;
  line-height: revert;
  padding: revert;
  -webkit-appearance: revert;
}

fieldset > :deep(pre) {
  background: #eee;
  border: 1px solid #ccc;
  padding: 2px;
}

fieldset > :deep(pre::after) {
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
