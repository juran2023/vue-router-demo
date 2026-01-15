/** tests/PizzaCard.test.js */
import { shallowMount } from '@vue/test-utils';
import { vi } from 'vitest';
import PizzaCard from '@/views/PizzaCard.vue';

// Mock the cart store
vi.mock('@/stores/cart', () => ({
  useCartStore: () => ({
    addedItems: [],
    add: vi.fn(),
  }),
}));

describe('PizzaCard', () => {
  it('should render the pizza details', () => {
    const pizza = {
      id: 1,
      name: 'Test Pizza',
      description: 'Test Pizza Description',
      image: 'test-pizza.jpg',
      price: 10,
      quantity: 10,
    };
    const wrapper = shallowMount(PizzaCard, {
      props: {
        pizza,
      },
    });

    expect(wrapper.text()).toContain(pizza.name);
    expect(wrapper.text()).toContain(pizza.description);
    expect(wrapper.text()).toContain(pizza.price.toString());
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Add to Cart');

    // 这次保存的Html快照与上一次测试保存的快照最比较，查看UI是否有变动
    // expect(wrapper.html()).toMatchSnapshot();

    // Check image attributes
    // const img = wrapper.find('img')
    // expect(img.attributes().alt).toEqual(pizza.title);
    // expect(img.attributes().src).toEqual(pizza.image);
  });
});
