<script setup>
 import { useCartStore } from '@/stores/cart';
 const cartStore = useCartStore()
</script>

<template>
  <div class="cart">
    <span class="cart_total">Cart: {{ cartStore.total }}</span>
  </div>
</template>

<style scoped>
  .cart_total{
    cursor: pointer;
    text-decoration: underline;
  }
</style>
