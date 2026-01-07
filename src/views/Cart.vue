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
      <li v-for="(item, index) in cartStore.detailedItems" :key="item.id">
        <span>{{ index + 1 }} : {{ item.name }}</span>
        <span> price: ${{ item.price }} * {{ item.quantity }} =</span>
        <span> ${{ item.total }}</span>
      </li>
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
</style>
