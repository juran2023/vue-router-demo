import { filterArray } from '@/utils/filterArray.js'
import { useFilter } from '@/composables/useFilter'
import { ref } from 'vue'

const pizzas = [
  {
    id: '1',
    title: 'Pina Colada Pizza',
    price: '10.00',
    description: 'A delicious combination of pineapple, coconut, and coconut milk.',
    quantity: 1,
  },
  {
    id: '4',
    title: 'Hawaiian Pizza',
    price: '11.00',
    description: 'A delicious combination of ham, pineapple, and pineapple.',
    quantity: 5,
  },
  {
    id: '5',
    title: 'Meat Lovers Pizza',
    price: '13.00',
    description: 'A delicious combination of pepperoni, sausage, and bacon.',
    quantity: 3,
  },
]

describe('filter array', () => {
  it('filters by title', () => {
    expect(filterArray(pizzas, 'title', 'pina')).toEqual([
      {
        id: '1',
        title: 'Pina Colada Pizza',
        price: '10.00',
        description: 'A delicious combination of pineapple, coconut, and coconut milk.',
        quantity: 1,
      },
    ])
  })

  it('should return an empty array if provided key does not exist', () => {
    expect(filterArray(pizzas, 'nonexistentKey', 'pina')).toEqual([])
  })
})

describe('useFilter', () => {
  it('filter by title and sort descending', () => {
    const arr = ref(pizzas)
    const { filteredArray } = useFilter(arr, 'title', 'pizza', 'desc')
    expect(filteredArray.value.length).toBe(3)
    expect(filteredArray.value[0].title).toBe('Pina Colada Pizza')
    expect(filteredArray.value[1].title).toBe('Meat Lovers Pizza')
    expect(filteredArray.value[2].title).toBe('Hawaiian Pizza')

    arr.value.push({
      id: '6',
      title: 'Zesty Pizza',
      price: '12.00',
      description: 'A delicious combination of spicy peppers and tangy sauce.',
      quantity: 2,
    })

    expect(filteredArray.value.length).toBe(4)
    expect(filteredArray.value[0].title).toBe('Zesty Pizza')
  })
})
