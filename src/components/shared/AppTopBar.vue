<template>
  <div class="apptopbar">
    <v-app-bar
     app 
     color="#ff0000" 
     dense 
     dark
     src="https://www.thebuckingham.com.au/wp-content/uploads/2018/11/christmas-1.jpg"
     >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Natal Solidário</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="red--text text--accent-4"
        >
         <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/UserPage">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Usuário</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/ListaCartas">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-gift</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Adote uma Carta</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/AdoteAnimal">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-gift</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Adote um Animal</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
    .apptopbar a{
        text-decoration: none;
    }
</style>