<template>
  <div v-if="loading">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">POKEMON</div>
          <v-list-item-title class="text-h5 mb-1 text-uppercase">
            <slot name="nom"></slot
          ></v-list-item-title>
          <v-list-item-subtitle
            ><slot name="description"></slot
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="100">
          <v-img
            :src="`${pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}`"
            contain
          >
            <template v-slot:placeholder>
              <!-- <v-row class="fill-height ma-0" align="center" justify="center">
               <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>  -->
              <img
                src="../assets/pokeball.png"
                class="rotate"
                alt="loading"
                width="60px"
              /> </template
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <slot name="lien"></slot>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>
    <v-card class="mx-auto ma-5" max-width="344" outlined m-2>
      <v-sheet :color="`'lighten-4'`" class="pa-3">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </v-card>
  </div>
</template>
<script>
import { getPokemonByName } from "../apis/pokemons";
//import Placeholder from "./Placeholder.vue";

export default {
  components: {
    //Placeholder,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokemon: {},
      loading: false,
    };
  },
  methods: {
    async getPokemonByName(name) {
      try {
        this.pokemon = await getPokemonByName(name);
        this.loading = true;
      } catch (error) {
        //throw new Error("La requete a echouee");
        console.error(error);
      }
    },
  },
  async mounted() {
    await this.getPokemonByName(this.name);
  },
};
</script>
<style>
.v-card {
  margin-bottom: 20px;
  padding: 10px;
}
.v-card__actions {
  justify-content: space-between;
}

.rotate {
  animation: rotation 2s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
