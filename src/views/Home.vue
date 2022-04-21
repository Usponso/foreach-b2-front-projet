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
        {{ $t("homeTitle") }}
      </h1>

      <p class="subheading font-weight-regular">
        {{ $t("homeDescription") }}
      </p>

      <p><a href="https://enzoaverlant.netlify.app/">Enzo Averlant</a></p>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
a:hover {
  text-decoration: none;
  cursor: pointer;
}
a {
  font-size: 25px;
}
</style>
