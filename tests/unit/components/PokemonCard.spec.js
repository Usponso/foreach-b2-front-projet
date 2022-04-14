/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import PokemonCard from "@/components/PokemonCard.vue";

describe("PokemonCard.vue", () => {
  it("Recuperation du nom du pokemon", () => {
    //* arrange
    const name = "Nom du pokemon";

    //* act
    const wrapper = shallowMount(PokemonCard, {
      propsData: { name },
    });
    const result = wrapper.vm.name;

    //* assert
    expect(result).toMatch(name);
  });
});
