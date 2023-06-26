import { searchPokemon } from "../data/dataDom.js";

export const printSearch = (listPokemons) => {
  searchPokemon.innerHTML = "";

  for (let i = 0; i < listPokemons.length; i++) {
    const pokemon = listPokemons[i];
    searchPokemon.innerHTML += `
        <ul class="pokemon">
            <li class="fondo"><img src="${pokemon.image}" alt="Imagen ${
      i + 1
    }" class="fondoima"/></li>
        </ul>
        `;
  }
};
