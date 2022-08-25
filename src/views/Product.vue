<template>
  <fetch-guard :state="state">
    <product-details v-if="productDetails" :product="productDetails" />
  </fetch-guard>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import FetchGuard, { State } from "../components/generals/FetchGuard.vue";
import ProductDetails from "../components/ProductDetails.vue";

import { API_URL } from "../constants";
import type { Product } from "../types/Product";

const props = defineProps<{
  id: string;
}>();

const productDetails = ref<Product>();
const state = ref<State>("loading");

onBeforeMount(async () => {
  try {
    const response = await fetch(`${API_URL}/products/${props.id}`);
    productDetails.value = await response.json();
    state.value = "success";
  } catch (error) {
    state.value = "error";
  }
});
</script>
