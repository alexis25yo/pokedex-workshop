import { pokeName } from "../data/dataDom";
import imgType from "./imgType";

export const printPokemonName = (array) => {
  let container = pokeName;
  const name = array.name;
  const logotype = imgType(array);
  container.innerHTML = `
      <img src="${logotype}" alt="tipo_fuego" class="white"/>
      <p><h1 class="white">${name}</h1></p>`;
};
