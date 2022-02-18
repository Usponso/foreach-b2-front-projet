<template>
  <v-app>
    <v-app-bar app color="red darken-4">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Logo POKEAPI"
            class="shrink mr-2"
            contain
            src="./assets/logo_pokeapi.png"
            transition="scale-transition"
            width="70"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.mobile">
        <v-btn text>
          <router-link to="/pokemons">
            <v-icon>mdi-pokeball</v-icon>
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/favoris">
            <v-icon>mdi-heart</v-icon>
          </router-link>
        </v-btn>
      </div>
      <div v-else>
        <v-btn text>
          <router-link to="/pokemons">
            <v-icon>mdi-pokeball </v-icon> {{ $t("allPokemons") }}
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/favoris">
            <v-icon>mdi-heart </v-icon> {{ $t("favorites") }}
          </router-link>
        </v-btn>
      </div>

      <v-btn text class="white--text" @click="changeLang">
        <v-icon>mdi-translate </v-icon>
        {{ $i18n.locale }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    changeLang() {
      if (this.$i18n.locale === "fr") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "fr";
      }
    },
  },
};
</script>

<style>
.v-application .v-app-bar a {
  color: white;
  text-decoration: none;
}
.v-main {
  margin-top: 20px;
}
</style>
