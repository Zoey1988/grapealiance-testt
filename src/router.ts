import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Products from './views/Products.vue';
import Product from './views/Product.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/:id',
    component: Product,
    props: true
  },
  { path: '/', redirect: '/products' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;