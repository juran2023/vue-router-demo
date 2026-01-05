import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usePizzasStore = defineStore("pizzas", () => {
  const pizzas = ref([]);

  const fetchPizzas = async () => {
    try {
      const response = await axios.get('http://localhost:8700/pizzas/');
      pizzas.value = response.data.data;
    } catch (error) {
      console.error('There was an error fetching the pizzas!', error);
    }
  };

  return { pizzas, fetchPizzas };
});
