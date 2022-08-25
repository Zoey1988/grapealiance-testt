<template>
  <div class="product_wrapper">
    <div class="product_wrapper__info">
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: $ {{ product.price }}</p>
      <span class="product_wrapper__info_category">{{ product.category }}</span>
    </div>

    <img class="product_wrapper__image" :src="product.image" alt="" />
  </div>
</template>

<script setup lang="ts">
import { Product } from "../types/Product";

defineProps<{ product: Product }>();
</script>

<style scoped>
.product_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product_wrapper__image {
  width: 50%;
}
.product_wrapper__info {
  flex-shrink: 0;
  width: 45%;
  padding: 1rem;
  text-align: left;
}
.product_wrapper__info_category {
  background-color: aquamarine;
  padding: 0.5rem;
  border-radius: 1rem;
}

@media (max-width: 768px) {
  .product_wrapper__info {
    width: 100%;
  }
}
</style>
