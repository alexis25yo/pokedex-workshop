import { URL_API } from "./data.js";
import { renderFooter } from "../modules/renderFooter.js";

export const listPokemons = [];

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
              no: resp.data.order.toString(),
              type: resp.data.types[0].type.name,
              hability: resp.data.abilities[0].ability.name,
              height: resp.data.height.toString(),
              weight: resp.data.weight.toString(),
              level: resp.data.base_experience.toString(),
            };
            listPokemons.push(newPokemon);
            // console.log(resp);
            if (response.data.results.length === index + 1) {
              resolve(renderFooter(listPokemons));
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
