import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import home from '@/features/home/main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/features/login/main.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/features/register/main.vue')
  },
  {
    path: '/',
    name: 'home',
    component: home,
    children:[
      {
        path: '/monCompte',
        name: 'monCompte',
        component: () => import("@/features/home/monCompte/main.vue"),
      },
      {
        path: '/listeDesPatients',
        name: 'listeDesPatients',
        component: () => import("@/features/home/listeDesPatients/main.vue"),
      }

    ]
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
