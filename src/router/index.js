import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductsDetailPage from '../views/ProductsDetailPage.vue'
import ProductsPage from '../views/ProductsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductsDetail',
    component: ProductsDetailPage,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/',
    redirect: '/products',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
