import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCartStore = defineStore('cart', () => {
  const addedItems = ref([])
  const total = computed(() => {
    return addedItems.value.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  const add = (item) => {
    const index = addedItems.value.findIndex(i => i.id === item.id)
    if (index > -1) {
      addedItems.value[index].quantity += item.quantity
    } else {
      addedItems.value.push(item)
    }
  }

  return { addedItems, total, add }
})
