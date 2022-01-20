<template>
  <v-container>
    <v-row no-gutters>
      <v-col md="4" v-for="pokemon in favoris" :key="pokemon.name"
        ><pokemon-card class="pa-2" :name="pokemon.name">
          <template #nom>{{ pokemon.name.toUpperCase() }}</template>
          <template #lien
            ><router-link :to="{ path: `pokemons/${pokemon.name}` }"
              ><v-btn color="primary" elevation="2">Ouvrir</v-btn></router-link
            >
            <v-btn @click="deleteFavoris(pokemon.name)"
              ><v-icon>mdi-delete</v-icon> Supprimer</v-btn
            ></template
          >
          <template #image></template></pokemon-card
      ></v-col>
    </v-row>
  </v-container>
</template>
<script>
import PokemonCard from "../components/PokemonCard.vue";
import { getFavoris } from "../apis/pokemons";
export default {
  name: "Favoris",
  components: {
    PokemonCard,
  },
  data() {
    return {
      favoris: [],
    };
  },
  methods: {
    deleteFavoris(name) {
      this.$store.commit("deleteFavoris", name);
    },
    async getFavoris() {
      this.favoris = await getFavoris(this.$store.state.favoris);
    },
  },
  // watch: {
  //   favoris: async function () {
  //     this.favoris = await getFavoris(this.$store.state.favoris);
  //     //this.getFavoris();
  //   },
  // },
  async mounted() {
    this.getFavoris();
  },
};
</script>
