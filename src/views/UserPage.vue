<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Natal Feliz 🎁</h2>
    <v-img
      class="userpage-imagem mb-4"
      src="https://img.elo7.com.br/product/zoom/22E4D0E/painel-papai-noel-natal-frete-gratis-painel-digital.jpg">
    </v-img>
    <p>Cadastre-se agora e garanta um feliz natal para uma criança.</p>

      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>


    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Cadastrar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Apagar
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Ajude
    </v-btn>
  </v-form>
  

  </v-container>
</template>
<script>
export default {
  name: 'UserPage'
}
</script>
<style scoped>
.userpage-imagem {
  border-radius: 3px;
}
</style>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>