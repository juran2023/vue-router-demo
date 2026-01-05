<script setup>
  import { usePizzasStore } from '@/stores/pizzas';
  import { onMounted } from 'vue';
  const pizzaStore = usePizzasStore();

  onMounted(() => {
    pizzaStore.fetchPizzas();
  });
</script>
<template>
  <div>
    <h1>Pizzas</h1>
    <ul>
      <li v-for="pizza in pizzaStore.pizzas" :key="pizza.id">
        {{ pizza.name }} |
        {{ pizza.description }} |
        {{ pizza.price }}
      </li>
    </ul>
  </div>
</template>
