<template>
  <fetch-guard :state="state">
    <products-list :products="allProducts" />
  </fetch-guard>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import ProductsList from "../components/ProductsList.vue";
import FetchGuard, { State } from "../components/generals/FetchGuard.vue";

import { API_URL } from "../constants";

import type { Product } from "../types/Product";

const allProducts = ref<Product[]>([]);
const state = ref<State>("loading");

onBeforeMount(async () => {
  try {
    const response = await fetch(`${API_URL}/products?limit=12`);
    allProducts.value = await response.json();
    state.value = "success";
  } catch (error) {
    state.value = "error";
  }
});
</script>
