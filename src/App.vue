<template>
  <v-app>
    <v-app-bar app color="red">
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

      <v-btn text
        ><router-link to="/pokemons">Tous les Pokemons</router-link></v-btn
      >
      <v-btn text><router-link to="/favoris">Favoris</router-link></v-btn>
      <v-btn text><router-link to="/about">About</router-link></v-btn>
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
