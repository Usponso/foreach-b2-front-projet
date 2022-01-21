import axios from "axios";

const pokeInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export async function getAllPokemons() {
  try {
    const res = await pokeInstance("?limit=50/");
    return res.data;
  } catch (e) {
    throw new Error("La requête a échoué");
  }
}

export async function getPokemonByName(name) {
  try {
    const res = await pokeInstance.get(name);
    return res.data;
  } catch (e) {
    throw new Error("La requête a échoué");
  }
}

export async function getFavoris(favoris) {
  try {
    const allFavoris = [];
    for (const pokemon of favoris) {
      allFavoris.push(await getPokemonByName(pokemon));
    }
    return allFavoris;
  } catch (e) {
    throw new Error("Erreur lors du chargement des favoris.");
  }
}

// export function deleteFavoris(name) {
//   try {
//     this.$store.commit("deleteFavoris", name);
//   } catch (e) {
//     console.log(e);
//     throw new Error("Une erreur est survenue lors de la suppression.");
//   }
// }

// export function addFavoris(name) {
//   try {
//     console.log(name);
//     this.$store.commit("addFavoris", name);
//   } catch (e) {
//     console.log(e);
//     throw new Error("Une erreur est survenue lors de l'ajout.");
//   }
// }
