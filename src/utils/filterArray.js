export const filterArray = (array, filterKey, searchTerm) => {
  const lowercasedTerm = searchTerm.toLowerCase()
  return array.filter((item) => {
    const itemValue = item[filterKey]?.toLowerCase()
    return itemValue?.includes(lowercasedTerm)
  })
}
