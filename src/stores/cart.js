import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { usePizzasStore } from './pizzas'

export const useCartStore = defineStore('cart', () => {
  const addedItems = ref(getFromLocalStorage() || [])
  const total = computed(() => {
    return addedItems.value.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  const detailedItems = computed(() => {
    const pizzaStore = usePizzasStore()

    return addedItems.value.map((item) => {
      const pizza = pizzaStore.pizzas.find((i) => i.id === item.id)
      const pizzaPrice = pizza?.price ? +pizza.price : 0

      return {
        ...item,
        name: pizza?.name ?? '',
        description: pizza?.description ?? '',
        price: pizzaPrice,
        total: pizzaPrice * item.quantity,
      }
    })
  })

  const remove = (id) => {
    const index = addedItems.value.findIndex((i) => i.id === id)
    if (index > -1) {
      addedItems.value.splice(index, 1)
    }
  }

  const clear = () => {
    addedItems.value.length = 0
  }

  const add = (item) => {
    const index = addedItems.value.findIndex((i) => i.id === item.id)
    if (index > -1) {
      addedItems.value[index].quantity += item.quantity
    } else {
      addedItems.value.push(item)
    }
  }

  return { addedItems, total, add, detailedItems, remove, clear }
})

function getFromLocalStorage() {
  const raw = localStorage.getItem('cart-items')
  if (!raw || raw === 'undefined') {
    return []
  }

  return JSON.parse(raw)
}
