<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">POKEMON</div>
        <v-list-item-title class="text-h5 mb-1">
          <slot name="nom"></slot
        ></v-list-item-title>
        <v-list-item-subtitle
          ><slot name="description"></slot
        ></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="100">
        <v-img
          :src="`${pokemon.sprites.other.dream_world.front_default}`"
          contain
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="dark lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <slot name="lien"></slot>
    </v-card-actions>
  </v-card>
</template>
<script>
import { getPokemonByName } from "../apis/pokemons";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokemon: {},
    };
  },
  methods: {
    async getPokemonByName(name) {
      try {
        this.pokemon = await getPokemonByName(name);
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
}
.v-card__actions {
  justify-content: space-between;
}
</style>
