import { footerElements } from "./scripts/data/dataDom.js";
import { getPokemons } from "./scripts/data/getPokemons.js";
import { printFooter } from "./scripts/modules/printFooter.js";

getPokemons();

footerElements.forEach((containerPokemons) => {
  containerPokemons.addEventListener("click", () => {
    console.log("hola mundo");
  });
});
