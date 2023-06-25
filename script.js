import {
  footerElements,
  search,
  searchBox,
  close,
  input,
} from "./scripts/data/dataDom.js";
import { getPokemons } from "./scripts/data/getPokemons.js";
import { getInfo } from "./scripts/modules/printMain.js";
import searchInput from "./scripts/modules/search.js";
import resetInput from "./scripts/modules/resetInput.js";

getPokemons();

footerElements.forEach((containerPokemons) => {
  containerPokemons.addEventListener("click", (event) => {
    const clickedElement = event.target.src;
    getInfo(clickedElement);
  });
});

search.addEventListener("click", () => {
  searchBox.classList.add("active");
});

close.addEventListener("click", () => {
  searchBox.classList.remove("active");
  resetInput();
});

const objeto = {};
input.addEventListener("blur", (event) => {
  const valorInput = event.target.value;
  const tamaño = Object.keys(valorInput).length;
  if (tamaño != 0) {
    objeto.valor = valorInput;
    searchInput(objeto);
  }
});
