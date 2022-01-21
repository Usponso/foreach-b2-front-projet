<template>
  <v-container class="text-center">
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo_pokeapi.png')"
        class="my-3"
        contain
        height="100"
      />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Projet front avancé Foreach
      </h1>

      <p class="subheading font-weight-regular">
        Utilisation d'une api pour manipuler les différentes notions vues en
        cours.
      </p>

      <p>{{ $t("message") }}</p>
      <p>{{ "langue:" + this.$i18n.locale }}</p>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
