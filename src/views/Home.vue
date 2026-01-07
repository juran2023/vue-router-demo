<script setup>
import NavBar from '@/components/NavBar.vue';
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from, next) => {
  const answer = window.confirm("Are you sure you want to leave?")
  console.log('asking whether to leave')
  next(!!answer)
})
</script>
<template>
  <NavBar />
  HOME
</template>
