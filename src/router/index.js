import Vue from 'vue'
import VueRouter from 'vue-router'
import teste from '../views/teste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  }
  {
    path: '/UserPage',
    name: 'UserPage',
    component: UserPage
  }
  {
    path: '/ListaCartas',
    name: 'ListaCartas',
    component: ListaCartas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
