<script setup>
import { usePizzasStore } from '@/stores/pizzas';
import { onMounted, watch } from 'vue';
import { useSearch } from '@/composables/useSearch';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
const route = useRoute()
const router = useRouter()
const querySearch = computed(() => (route.query?.search ?? '').toString())
const pizzaStore = usePizzasStore();
const itemList = computed(() => pizzaStore.pizzas)
const { search, searchResults } = useSearch(itemList, 'name', querySearch.value)
const inputValue = ref('')

onMounted(() => {
  pizzaStore.fetchPizzas();
});

function handleSearch() {
  router.push({
    query: {
      ...route.query,
      search: inputValue.value || undefined
    }
  })
}

watch(querySearch, (newVal, oldVal) => {
  search.value = newVal
  inputValue.value = newVal
})

</script>
<template>
  <div>
    <h1>Pizzas</h1>
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        {{ pizza.name }} |
        {{ pizza.description }} |
        {{ pizza.price }}
      </li>
    </ul>
  </div>
  <div>
    <h1>Choose Your Taste</h1>
    <input v-model="inputValue" />
    <button @click="handleSearch">search Pizza</button>

  </div>
</template>
