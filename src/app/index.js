import {
  footerElements,
  search,
  searchBox,
  close,
  input,
  containerPokemons,
  searchPokemon,
  footerSearch,
} from "./scripts/data/dataDom";
import { getPokemons } from "./scripts/data/getPokemons";
import { getInfo } from "./scripts/modules/printMain";
import searchInput from "./scripts/modules/search";
import resetInput from "./scripts/modules/resetInput";
import { printSearch } from "./scripts/modules/printSearch";
import "./styles/style.scss";

getPokemons();

document.addEventListener("DOMContentLoaded", () => {
  footerElements.forEach((containerPokemons) => {
    containerPokemons.addEventListener("click", (event) => {
      const clickedElement = event.target.src;
      getInfo(clickedElement);
    });
  });

  footerSearch.forEach((searchPokemon) => {
    searchPokemon.addEventListener("click", (event) => {
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
    containerPokemons.classList.remove("none");
    searchPokemon.classList.add("none");
  });

  const objeto = {};
  input.addEventListener("blur", (event) => {
    const valorInput = event.target.value;
    const tamaño = Object.keys(valorInput).length;
    if (tamaño != 0) {
      objeto.valor = valorInput;
      const res = searchInput(objeto);
      printSearch(res);
      containerPokemons.classList.add("none");
      searchPokemon.classList.remove("none");
    }
  });
});
