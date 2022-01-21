<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="4" v-for="pokemon in pokemons.results" :key="pokemon.name"
        ><pokemon-card class="pa-2" :name="pokemon.name">
          <template #nom>{{ pokemon.name.toUpperCase() }}</template>
          <template #lien>
            <router-link :to="{ path: `pokemons/${pokemon.name}` }">
              <v-btn color="primary" elevation="2">Ouvrir</v-btn>
            </router-link>
            <v-btn v-if="checkFav(pokemon.name)" @click="addPoke(pokemon.name)">
              <v-icon>mdi-heart</v-icon> Ajouter</v-btn
            ><v-btn v-else @click="deletePoke(pokemon.name)"
              ><v-icon>mdi-delete</v-icon> Supprimer</v-btn
            ></template
          ></pokemon-card
        ></v-col
      >
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
    addPoke(name) {
      if (this.checkFav(name)) {
        this.$store.commit("addFavoris", name);
      }
    },
    deletePoke(name) {
      if (!this.checkFav(name)) {
        this.$store.commit("deleteFavoris", name);
      }
    },
    checkFav(name) {
      if (!this.$store.state.favoris.includes(name)) {
        return true;
      } else {
        return false;
      }
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
