import axios from 'axios'
import { ref } from 'vue'
export function usePizza() {
  const pizza = ref(null)
  const error = ref('')
  const loading = ref(false)

  const fetchPizza = async (id) => {
    try {
      loading.value = true
      let response = await axios.get(`http://localhost:8080/pizza`, {
        params: { id },
      })
      pizza.value = response.data
    } catch (err) {
      error.value =
        err?.response?.data?.message || err?.response?.data || err?.message || 'Request failed'
    } finally {
      loading.value = false
    }
  }

  return { pizza, error, loading, fetchPizza }
}
