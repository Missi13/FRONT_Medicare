import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import home from '@/features/home/main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: home
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/features/login/main.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/features/register/main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
