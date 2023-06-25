import { footerElements } from "./scripts/data/dataDom.js";
import { getPokemons, listPokemons } from "./scripts/data/getPokemons.js";
import { getInfo } from "./scripts/modules/printMain.js";

getPokemons();

footerElements.forEach((containerPokemons) => {
  containerPokemons.addEventListener("click", (event) => {
    const clickedElement = event.target.src;
    getInfo(clickedElement);
  });
});
