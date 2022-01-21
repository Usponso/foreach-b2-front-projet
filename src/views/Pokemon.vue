<template>
  <v-container>
    <v-row>
      <v-btn :disabled="$router.history.length" @click="goBack">
        <v-icon> mdi-chevron-left</v-icon>Retour
      </v-btn>
    </v-row>

    <v-row class="text-center">
      <br />
      <v-col md="4" sm="12">
        <v-img
          v-if="loading"
          :src="`${pokemon.sprites.other.dream_world.front_default}`"
        />
        <br />
        <h1 v-if="loading">{{ this.pokemon.name.toUpperCase() }}</h1>
      </v-col>
      <v-col md="6">
        {{ this.types }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getPokemonByName } from "../apis/pokemons";

export default {
  name: "Pokemon",
  data() {
    return {
      pokemon: {},
      types: [],
      error: "",
      loading: false,
    };
  },
  methods: {
    async getPokemonByName() {
      try {
        this.pokemon = await getPokemonByName(this.$route.params.name);
        this.types = this.pokemon.types;
        this.loading = true;
      } catch (e) {
        this.error = e;
        console.error(e);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    await this.getPokemonByName();
  },
};
</script>
<style scoped></style>
