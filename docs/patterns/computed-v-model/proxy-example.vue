<template>
  <user-edit-form v-model="user" />
  <pre>Bound value: {{ user }}</pre>
</template>
<script setup>
import { ref } from 'vue'
import UserEditForm from './user-edit-form.vue'

const user = ref({
  firstName: 'Adam',
  lastName: 'Bell',
  city: 'Copenhagen',
  country: 'Denmark',
  email: 'exp@s.com',
  phone: 'N/A'
})
</script>
