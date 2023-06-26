import { pokeImg } from "../data/dataDom";

export const printPokemonImg = (array) => {
  let container = pokeImg;
  const img = array.image;
  container.innerHTML = `
      <img src="${img}" alt="PokemonSelec" class="color charizardimg">`;
};
