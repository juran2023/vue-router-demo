<script setup>
import { useCartStore } from '@/stores/cart';
import { defineProps, computed } from 'vue';
const {addedItems, add} = useCartStore()

const props = defineProps({
  pizza: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['add-to-cart'])

const pizza = props.pizza

function addToCart(id){
  emits('add-to-cart', {id: id, quantity:1})
  add({id: id, quantity:1})
}

const isInCart = computed(() => !!addedItems.find(i => i.id === pizza.id))
</script>

<template>
    {{ pizza.name }} |
    {{ pizza.description }} |
    {{ pizza.price }}
    <button @click="addToCart(pizza.id)">Add to Cart</button>
    <span v-if="isInCart" style="color: orange">inCart</span>
</template>
