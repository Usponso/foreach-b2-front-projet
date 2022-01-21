import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoris: [],
  },
  mutations: {
    deleteFavoris(state, name) {
      const temp = state.favoris.indexOf(name);
      if (temp > -1) {
        state.favoris.splice(temp, 1);
      }
      return state.favoris;
    },
    addFavoris(state, name) {
      state.favoris.push(name);
    },
  },
  actions: {},
  modules: {},
});
