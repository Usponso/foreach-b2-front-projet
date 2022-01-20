import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoris: ["charmander"],
  },
  mutations: {
    deleteFavoris(state, name) {
      console.log(state.favoris);
      console.log("suppression");
      console.log(name);
      const temp = state.favoris.indexOf(name);
      if (temp > -1) {
        state.favoris.splice(temp, 1);
      }
      console.log(state.favoris);
      return state.favoris;
    },
    addFavoris(state, name) {
      console.log(state.favoris);
      console.log("ajout");
      console.log(name);
      state.favoris.push(name);
      console.log(state.favoris);
    },
  },
  actions: {},
  modules: {},
});
