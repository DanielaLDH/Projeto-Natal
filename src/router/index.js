import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import UserPage from '../views/UserPage.vue'
import ListaCartas from '../views/ListaCartas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component: UserPage
  },
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