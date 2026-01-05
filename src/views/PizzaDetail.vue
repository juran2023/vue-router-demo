<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { usePizza } from '@/composables/usePizza';

const { pizza, error, loading, fetchPizza } = usePizza()
const route = useRoute()
const pizzaId = route.query?.id

onMounted(() => {
  if (pizzaId) {
    fetchPizza(pizzaId)
  }
})
</script>

<template>
  <div v-if="loading">
    loading...
  </div>
  <div v-else-if="error">
    something went wrong
  </div>
  <div v-else-if="pizza">
    <h1>{{ pizza.name }}</h1>
    <span>{{ pizza.description }}</span>
    <span>{{ pizza.price }}</span>
  </div>
</template>
