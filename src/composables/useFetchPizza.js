import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
export function useFetchPizza() {
  const pizzas = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchPizzas = async () => {
    loading.value = true
    try {
      const response = await axios.get('http://localhost:8080/pizzas')
      pizzas.value = response.data
    } catch (err) {
      error.value = err?.response?.data?.message || err?.message || 'Request failed'
    } finally {
      loading.value = false
    }
  }

  onBeforeMount(() => {
    fetchPizzas()
  })

  return { pizzas, loading, error }
}
