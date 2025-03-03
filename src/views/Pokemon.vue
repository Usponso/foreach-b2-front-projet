<template>
  <v-container>
    <v-row>
      <v-btn :disabled="$router.history.length" @click="goBack">
        <v-icon> mdi-chevron-left</v-icon>{{ $t("btnBack") }}
      </v-btn>
    </v-row>

    <v-row class="text-center description" v-if="loading">
      <br />
      <v-col md="4" cols="12" class="align-self-center">
        <v-img
          :src="`${pokemon.sprites.other['official-artwork'].front_default}`"
        />
        <br />
        <h1 class="text-uppercase">
          {{ "#" + this.pokemon.id + " " + this.pokemon.name }}
        </h1>
      </v-col>
      <v-col md="8">
        <h2 class="description_title">Type(s)</h2>
        <br />
        <v-row class="types">
          <!-- Affichage dynamique des types en image -->
          <v-img
            v-for="type in types"
            :key="type.id"
            :src="require(`../assets/types/${type.type.name}.png`)"
            max-width="150"
          />
        </v-row>

        <br />
        <h2 class="description_title">{{ $t("baseStats") }}</h2>

        <v-row>
          <v-col md="4" cols="12" v-for="stat in stats" :key="stat.stat.name">
            <v-card class="stat_card">
              <!-- Classe dynamique pour changer les couleurs en des cards en fonction du type principal -->
              <v-card-title
                class="darken-1 white--text justify-center text-uppercase"
                :class="[types[0].type.name]"
                >{{ $t(stat.stat.name) }}</v-card-title
              >
              <v-card-text class="text-center stat_value pa-4">{{
                stat.base_stat
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="description">
      <v-col md="6" cols="12">
        <v-row>
          <v-col cols="12" class="text-center">
            <h2>{{ $t("default") }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-img
            :src="
              sprites.versions['generation-v']['black-white'].animated
                .front_default
            "
            contain
          ></v-img>
          <v-img
            :src="
              sprites.versions['generation-v']['black-white'].animated
                .back_default
            "
            contain
          ></v-img>
        </v-row>
      </v-col>

      <v-col md="6" cols="12">
        <v-row>
          <v-col cols="12" class="text-center">
            <h2>Shiny</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-img
            :src="
              sprites.versions['generation-v']['black-white'].animated
                .front_shiny
            "
            contain
          ></v-img>
          <v-img
            :src="
              sprites.versions['generation-v']['black-white'].animated
                .back_shiny
            "
            contain
          ></v-img>
        </v-row>
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
      stats: [],
      sprites: [],
      error: "",
      loading: false,
    };
  },
  methods: {
    async getPokemonByName() {
      try {
        this.pokemon = await getPokemonByName(this.$route.params.name);
        this.types = this.pokemon.types;
        this.stats = this.pokemon.stats;
        this.sprites = this.pokemon.sprites;
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
<style scoped>
/* Import des couleurs des types */
@import "../assets/css/colors.css";

.description {
  margin-top: 40px;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 20px;
}
.types {
  justify-content: space-evenly;
}
.description_title {
  margin: 10px;
}
.stat_value {
  font-size: 25px;
  font-weight: bold;
}
.stat_card {
  min-height: 100%;
}
</style>
