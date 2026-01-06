<script setup>
import { onMounted } from 'vue';
import { usePizza } from '@/composables/usePizza';
import { useRouter } from 'vue-router';

const router = useRouter();
const { pizza, error, loading, fetchPizza } = usePizza()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  if (props.id) {
    fetchPizza(props.id)
  }
})
</script>

<template>
  <div v-if="loading">
    loading...
  </div>
  <div v-else-if="error">
    something went wrong
  </div>
  <div v-else-if="pizza">
    <h1>{{ pizza.name }}</h1>
    <span>{{ pizza.description }}</span>
    <span>{{ pizza.price }}</span>
  </div>
  <div><button @click="router.back">back</button></div>
  <div><button @click="router.forward">forward</button></div>
</template>
