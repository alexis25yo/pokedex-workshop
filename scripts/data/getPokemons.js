import { URL_API } from "./data.js";
import { renderFooter } from "../modules/renderFooter.js";

const listPokemons = [];

export const getPokemons = async () => {
  try {
    const response = await axios.get(URL_API);
    if (response.status === 200) {
      return new Promise((resolve, reject) => {
        response.data.results.forEach(async (pokemon, index) => {
          try {
            const resp = await axios.get(pokemon.url);
            const newPokemon = {
              name: resp.data.name,
              image: resp.data.sprites.front_default,
              height: resp.data.height,
              experience: resp.data.base_experience,
              specie: resp.data.species.name,
              weight: resp.data.weight,
            };
            listPokemons.push(newPokemon);
            if (response.data.results.length === index + 1) {
              resolve(renderFooter(listPokemons));
              console.log("Estoy funcionando.");
            }
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};
