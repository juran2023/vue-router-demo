<script setup>
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
const cartStore = useCartStore()
const showCartDetail = ref(false)
</script>

<template>
  <div class="cart">
    <span class="cart_total" @click="showCartDetail = !showCartDetail">Cart: {{ cartStore.total }}</span>
    <ul v-show="showCartDetail" class="cart_list">
      <div v-if="cartStore.total === 0">
        No items in Cart
      </div>
      <div v-else>
        <li v-for="(item, index) in cartStore.detailedItems" :key="item.id">
          <span>{{ index + 1 }} : {{ item.name }}</span>
          <span> price: ${{ item.price }} * {{ item.quantity }} =</span>
          <span> ${{ item.total }}</span>
          <button @click="cartStore.remove(item.id)">Remove</button>
        </li>
        <button @click="cartStore.clear">Remove All</button>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.cart_total {
  cursor: pointer;
  text-decoration: underline;
}

.cart {
  position: relative;
}

.cart_list {
  position: absolute;
  border: 1px;
  background-color: white;
  color: black
}

button {
  animation: pulse 2s infinite;
  transition: background-color 0.5s ease-in-out;
}

button:hover {
  background-color: red;
  color: white;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 33, 33, 0.5)
  }

  100% {
    box-shadow: 0 0 0 20px rgba(228, 27, 27, 0)
  }
}
</style>
