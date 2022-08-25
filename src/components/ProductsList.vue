<template>
  <h1>Products List</h1>
  <div class="products_container">
    <div v-for="product in products" :key="product.id" class="product_card">
      <img :src="product.image" />
      <div class="product_card_info">
        <h3>{{ product.title }}</h3>
        <p>
          {{ product.description }}
        </p>
        <span class="product_card_info__price">${{ product.price }}</span>
        <router-link :to="`/products/${product.id}`">more details</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "../types/Product";

defineProps<{ products: Product[] }>();
</script>

<style scoped>
.products_container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
}
.product_card {
  width: 320px;
  border: 1px solid #cccccc;
  color: #595959;
  margin: 0 0.25rem 1rem 0.25rem;
  position: relative;
}
.product_card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.product_card_info {
  padding: 0.5rem;
}
.product_card_info__price {
  position: absolute;
  top: 0.5rem;
  left: 0;
  background-color: #c0395b;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0 1rem 1rem 0;
}
.product_card_info h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product_card_info p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
