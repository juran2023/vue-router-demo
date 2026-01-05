import { ref, computed } from 'vue'
export function useSearch(items, filter = 'name', defaultSearch = '') {
  const search = ref(defaultSearch)

  const searchResults = computed(() => {
    const searchTerm = search.value.toLowerCase()
    if (searchTerm === '') {
      return items.value
    }

    return items.value.filter((item) => {
      const itemValue = item[filter]?.toLowerCase()
      return itemValue.includes(searchTerm)
    })
  })

  return { search, searchResults }
}
