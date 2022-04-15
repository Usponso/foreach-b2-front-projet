/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import AllPokemons from "@/views/AllPokemons.vue";
import { getAllPokemons } from "@/apis/pokemons";
import vuex from "vuex";

const localVue = createLocalVue();
localVue.use(vuex);

jest.mock("@/apis/pokemons.js", () => ({
  getAllPokemons: jest.fn(async () => {
    return Promise.resolve([{ name: "bulbasaur" }, { name: "charmander" }]);
  }),
}));

// let options;

// beforeEach(() => {
//   options = {
//     localVue,
//     i18n,
//   };
// });

describe("AllPokemons.vue", () => {
  let store;
  let options;
  let state;
  let actions;

  beforeEach(() => {
    state = {
      pokemons: [{ name: "bulbasaur" }, { name: "charmander" }],
    };

    actions = {
      getAllPokemons: jest.fn(),
    };

    store = new vuex.Store({
      state,
      actions,
    });

    const $t = () => {};

    options = {
      localVue,
      store,
      mocks: {
        $t,
      },
    };
  }),
    describe("getAllPokemons", () => {
      it("fetches and sets pokemons", async () => {
        //* arrange
        const wrapper = shallowMount(AllPokemons, options);

        //* act
        await wrapper.vm.getAllPokemons();

        //* assert
        expect(getAllPokemons).toHaveBeenCalled();
        expect(wrapper.vm.pokemons).toEqual([
          { name: "bulbasaur" },
          { name: "charmander" },
        ]);
      });
    });
});
