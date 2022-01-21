<template>
  <v-container>
    <v-row no-gutters v-if="favoris.length">
      <v-col md="4" v-for="pokemon in favoris" :key="pokemon.id"
        ><pokemon-card class="pa-2" :name="pokemon.name">
          <template #nom>{{ pokemon.name.toUpperCase() }}</template>
          <template #lien
            ><router-link :to="{ path: `pokemons/${pokemon.name}` }"
              ><v-btn color="primary" elevation="2">Ouvrir</v-btn></router-link
            >
            <v-btn class="red white--text" @click="deleteFavoris(pokemon.name)"
              ><v-icon>mdi-delete</v-icon> {{ $t("btnDelete") }}</v-btn
            ></template
          ></pokemon-card
        ></v-col
      >
    </v-row>
    <v-row class="text-center" v-else>
      <v-col
        ><h1>
          :( <br />
          {{ $t("noFavorites") }}
        </h1>
        <br />
        <v-btn color="light" class="add"
          ><router-link to="/pokemons"
            ><v-icon>mdi-plus</v-icon> {{ $t("btnAdd") }}</router-link
          ></v-btn
        >
      </v-col>
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
      this.getFavoris();
    },
    async getFavoris() {
      this.favoris = await getFavoris(this.$store.state.favoris);
    },
    checkFav() {
      if (this.favoris) {
        return true;
      } else {
        return false;
      }
    },
  },
  async mounted() {
    this.getFavoris();
  },
};
</script>
<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
