<template>
  <v-app>
     <div class="inicio">
    <Inicio/>
    </div>

    <div class="UserPage">
    <UserPage/>
    </div>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Natal Feliz 🎁
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red--text text--lighten-2">
    
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Início
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Cadastro
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-mail</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Cartinhas
            </v-list-item-title>
          </v-list-item>

          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

import Inicio from '@/views/Inicio.vue'
import UserPage from '@/views/UserPage.vue'

export default {
  name: 'App',
  components: {
    Inicio,
    UserPage
  },

  data() {
    return {
      drawer: false,
      group: null,
    }
  }
};
</script>