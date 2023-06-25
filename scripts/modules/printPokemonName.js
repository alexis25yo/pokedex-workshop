import { pokeName } from "../data/dataDom.js";
import imgType from "./imgType.js";

export const printPokemonName = (array) => {
  let container = pokeName;
  const name = array.name;
  const logotype = imgType(array);
  container.innerHTML = `
      <img src="${logotype}" alt="tipo_fuego" class="white"/>
      <p><h1 class="white">${name}</h1></p>`;
};
