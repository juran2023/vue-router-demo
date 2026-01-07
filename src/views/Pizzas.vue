<script setup>
import { usePizzasStore } from '@/stores/pizzas';
import { useSearch } from '@/composables/useSearch';
import { useRouter, useRoute } from 'vue-router';
import { watch, ref, defineProps } from 'vue';
import { storeToRefs } from 'pinia';
const props = defineProps({
  searchTerm:{
    type: String,
    required: false,
    default: ""
  }
})
const router = useRouter()
const route = useRoute()
const pizzaStore = usePizzasStore();
const {pizzas} = storeToRefs(pizzaStore)
const { search, searchResults } = useSearch(pizzas, 'name', props.searchTerm)
const inputValue = ref('')

pizzaStore.fetchPizzas();

function handleSearch() {
  router.push({
    query: {
      ...route.query,
      search: inputValue.value || undefined
    }
  })
}

watch(() => props.searchTerm, (newVal) => {
  search.value = newVal
  inputValue.value = newVal
})

</script>
<template>
  <div>
    <h1>Pizzas</h1>
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza"/>
      </li>
    </ul>
  </div>
  <div>
    <h1>Choose Your Taste</h1>
    <input v-model="inputValue" />
    <button @click="handleSearch">search Pizza</button>
  </div>
</template>
