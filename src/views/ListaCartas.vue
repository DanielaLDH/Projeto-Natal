<template>
  <v-container>
    <div class="lista-cartas">
      <h2 class="text-h5 text-center mb-3 mt-5">Lista de Cartinhas</h2>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th colspan="6" class="text-left">
                Crianças
              </th>
              <th class="text-right">
                Cartinha
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(child, index) of childLetters" :key="index">
              <td class="text-left" colspan="6">
                <v-img
                  class="mb-4"
                  :src="child.photo"
                  style="width:130px;"
                ></v-img>
                <br />
                <strong class="child-name">{{ child.name }}</strong>
                <br />
                <span class="address">{{ child.address }}</span>

                <!--
                            <v-simple-table>
                                <tr>
                                    <v-img class="mb-4" :src="child.photo" style="width:130px;"></v-img>
                                </tr>
                                <tr>
                                    <span class="child-name">{{ child.name }}</span>
                                </tr>
                                <tr>
                                    <span class="address">{{ child.address }}</span>
                                </tr>
                            </v-simple-table>
                        -->
              </td>
              <td class="text-right">
                  <v-card class="ocupa-cem-percento-pai">
                      <div class="letter-message">{{ child.description }} </div>
                  </v-card>
                
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ListaCartas",

  data() {
    //Dentro de data() estão os dados que serão utilizados do próprio componente.
    return {
      childLetters: [],
    };
  },

  computed: {
    //computed são dados (data) que precisam de uma lógica
  },

  created() {
    //created() é uma função do ciclo de vida do componente. Se queremos que algo carregue assim que o componente é criado, usamos created()
    fetch("https://it3yui.firebaseio.com/natal.json") //link da API
      .then((resposta) => resposta.json()) //após fazer o 'fetch' da API, ou seja, após pegar a API, eu quero que pegue essa resposta e transforme essa resposta em 'json'
      .then((json) => {
        //Então, eu quero que pegue essa resposta da linha de cima, que é o json, e ...
        this.childLetters = json; //...Atribua esse json à variável 'clubesLista' (que é um array)

        //console.log(this.clubesLista); //Interessante para ver se está carregando tudo certinho. o 'console.log' tem aue ficar aqui, pois o ' fetch() ' é uma requisição assíncrona, então se ele estiver fora, pode ser que não tenha carregado tudo quando o ' console.log ' for chamado
      });
  },

  methods: {
    //Dentro de methods estão as funções que utilizaremos no componente. Cada nova função deve ser separada por uma vírgula.
  },
};
</script>

<style scoped>

.ocupa-cem-percento-pai{
    width: 100%;
}

.child-name {
  font-size: 10px;
}
.address {
  font-size: 10px;
}
.letter-message {
  font-size: 10px;
  width: 50%;

}
</style>
