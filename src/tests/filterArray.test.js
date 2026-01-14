import { filterArray } from '@/utils/filterArray.js'

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
