<template>
  <v-container>
    <div class="lista-cartas">
      <h2 class="text-h5 text-center mb-3 mt-5">Adote um Bichinho</h2>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th colspan="6" class="text-left">
                Anmais
              </th>
              <th class="text-right">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(animal, index) of animais"
              :key="index"
            >

                <td class="text-left" colspan="6">
                  <v-img
                    class="mb-4"
                    :src="animal.photo"
                    style="width:150px;"
                  ></v-img>
                 
                </td>
                <td>
                     <br />
                  <strong class="child-name">{{ animal.name }}</strong>
                  <br />
                  <span class="address">{{ animal.address }}</span>
                  <br/><br/>
                  <v-card>
                    <span class="letter-message">{{ animal.description }}</span>
                  </v-card>
                  <br/>
                  <button class="button" @click="enviaPresenteMensagem()">Clique para adotar <span>{{ animal.name }}</span> </button>
                  <br/><br/>
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
      animais: [],
    };
  },

  computed: {
    //computed são dados (data) que precisam de uma lógica
  },

  created() {
    //created() é uma função do ciclo de vida do componente. Se queremos que algo carregue assim que o componente é criado, usamos created()
    fetch("https://it3yui.firebaseio.com/pets.json") //link da API
      .then((resposta) => resposta.json()) //após fazer o 'fetch' da API, ou seja, após pegar a API, eu quero que pegue essa resposta e transforme essa resposta em 'json'
      .then((json) => {
        //Então, eu quero que pegue essa resposta da linha de cima, que é o json, e ...
        this.animais = json; //...Atribua esse json à variável 'clubesLista' (que é um array)

        //console.log(this.clubesLista); //Interessante para ver se está carregando tudo certinho. o 'console.log' tem aue ficar aqui, pois o ' fetch() ' é uma requisição assíncrona, então se ele estiver fora, pode ser que não tenha carregado tudo quando o ' console.log ' for chamado
      });
  },

  methods: {
    //Dentro de methods estão as funções que utilizaremos no componente. Cada nova função deve ser separada por uma vírgula.
    enviaPresenteMensagem(){
      alert("Vamos mandar para você um email com as instruções de adoção!")
    }
  },
};
</script>

<style scoped>
.child-name {
  font-size: 10px;
}
.address {
  font-size: 10px;
}
.letter-message {
  font-size: 10px;
}

.button {
  background-color: darkgrey;
  margin: 1px solid black;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.479);
  border-radius: 5px;
}
</style>
