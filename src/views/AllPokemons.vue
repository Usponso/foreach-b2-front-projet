<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="4" v-for="pokemon in pokemons.results" :key="pokemon.name"
        ><pokemon-card class="pa-2" :name="pokemon.name">
          <template #nom>{{ pokemon.name }}</template>
          <template #lien>
            <router-link :to="{ path: `pokemons/${pokemon.name}` }">
              <v-btn color="primary" elevation="2">{{ $t("btnOpen") }}</v-btn>
            </router-link>
            <v-btn v-if="checkFav(pokemon.name)" @click="addPoke(pokemon.name)">
              <v-icon class="red--text">mdi-heart</v-icon>
              {{ $t("btnAdd") }}</v-btn
            ><v-btn
              color="red white--text"
              v-else
              @click="deletePoke(pokemon.name)"
              ><v-icon>mdi-delete</v-icon> {{ $t("btnDelete") }}</v-btn
            ></template
          ></pokemon-card
        ></v-col
      >
      <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
        {{ $t(`alert[${this.text}]`) }}

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
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
      snackbar: false,
      timeout: 2000,
      text: "",
      color: "",
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
        this.text = 0;
        this.snackbar = true;
        this.color = "green darken-1";
      } else {
        this.text = 1;
        this.snackbar = true;
        this.color = "red darken-1";
      }
    },
    deletePoke(name) {
      if (!this.checkFav(name)) {
        this.$store.commit("deleteFavoris", name);
        this.text = 2;
        this.snackbar = true;
        this.color = "green darken-1";
      } else {
        this.text = 3;
        this.snackbar = true;
        this.color = "red darken-1";
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
