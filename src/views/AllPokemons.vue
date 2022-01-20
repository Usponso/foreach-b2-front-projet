<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="4" v-for="pokemon in pokemons.results" :key="pokemon.name"
        ><pokemon-card class="pa-2" :name="pokemon.name">
          <template #nom>{{ pokemon.name.toUpperCase() }}</template>
          <template #lien
            ><router-link :to="{ path: `pokemons/${pokemon.name}` }"
              ><v-btn color="primary" elevation="2">Ouvrir</v-btn></router-link
            ><v-btn @click="add(pokemon.name)"
              ><v-icon>mdi-heart</v-icon></v-btn
            ></template
          >
          <template #image></template></pokemon-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import PokemonCard from "../components/PokemonCard.vue";
import { getAllPokemons } from "../apis/pokemons";

export default {
  name: "Pokemons",
  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemons: [],
      error: "",
    };
  },
  methods: {
    async getAllPokemons() {
      try {
        this.pokemons = await getAllPokemons();
      } catch (e) {
        this.error = e;
      }
    },
    add(name) {
      this.$store.commit("addFavoris", name);
    },
  },
  async mounted() {
    await this.getAllPokemons();
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
</style>
