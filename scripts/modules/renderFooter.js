import { containerPokemons } from "../data/dataDom.js";

export const renderFooter = (listPokemons) => {
  console.log("Hello", listPokemons);
  containerPokemons.innerHTML = "";

  for (let i = 0; i < listPokemons.length; i++) {
    const pokemon = listPokemons[i];
    containerPokemons.innerHTML += `
        <ul class="pokemon">
            <li class="fondo"><img src="${pokemon.image}" alt="Imagen ${
      i + 1
    }" class="fondoima"/></li>
        </ul>
        `;
  }
};
