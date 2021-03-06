import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import UserPage from '../views/UserPage.vue'
import ListaCartas from '../views/ListaCartas.vue'
import AdoteAnimal from '../views/AdoteAnimal.vue'

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
  },
  {
    path: '/AdoteAnimal',
    name: 'AdoteAnimal',
    component: AdoteAnimal
  }
]

const router = new VueRouter({routes
})

export default router