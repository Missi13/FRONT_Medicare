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
        children:[
          {
            path: '/informations',
            name: 'informations',
            component: () => import("@/features/home/monCompte/informations/main.vue"),
          },
          {
            path: '/update',
            name: 'update',
            component: () => import("@/features/home/monCompte/update/main.vue"),
          },
        ]
      },
      {
        path: '/configuration',
        name: 'configuration',
        component: () => import("@/features/home/configuration/main.vue"),
      },
      {
        path: '/listeDesPatients',
        name: 'listeDesPatients',
        component: () => import("@/features/home/listeDesPatients/main.vue"),
      },
      {
        path: '/consultation',
        name: 'consultation',
        component: () => import("@/features/home/consultation/main.vue"),
      },
      {
        path: '/ordonnance',
        name: 'ordonnance',
        component: () => import("@/features/home/ordonnance/main.vue"),
      },
      {
        path: '/certificats',
        name: 'certificats',
        component: () => import("@/features/home/certificats/main.vue"),
      },
      {
        path: '/exploration',
        name: 'exploration',
        component: () => import("@/features/home/exploration/main.vue"),
      },
      {
        path: '/historique',
        name: 'historique',
        component: () => import("@/features/home/historique/main.vue"),
      },
      {
        path: '/rendezVous',
        name: 'rendezVous',
        component: () => import("@/features/home/rendezVous/main.vue"),
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
