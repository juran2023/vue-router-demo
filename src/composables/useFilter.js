import { ref, computed } from 'vue'

export function useFilter(arr, key, term, defaultOrder = 'asc') {
  const order = ref(defaultOrder)
  const filterBy = ref(key)
  const filterTerm = ref(term)

  const filteredArray = computed(() => {
    let filtered = arr.value

    if (filterTerm.value) {
      const lowercasedTerm = filterTerm.value.toLowerCase()
      filtered = filtered.filter((item) => {
        const itemValue = item[filterBy.value]?.toLowerCase()
        return itemValue?.includes(lowercasedTerm)
      })
    }

    filtered.sort((a, b) => {
      const aValue = a[filterBy.value]
      const bValue = b[filterBy.value]

      if (aValue < bValue) return order.value === 'asc' ? -1 : 1
      if (aValue > bValue) return order.value === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  })

  return {
    filterBy,
    filterTerm,
    filteredArray,
    order,
  }
}
