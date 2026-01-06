<template>
  <h1>404 Not Found</h1>
  <div>path: {{ route.path }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params.pathMatch)
</script>
