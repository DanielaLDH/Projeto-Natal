import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaCartas from '../views/ListaCartas.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/listacartas',
    name: 'ListaCartas',
    component: ListaCartas
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
