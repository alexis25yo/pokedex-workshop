import { listPokemons } from "../data/getPokemons.js";

export let listSearch = [];

const searchInput = (objeto) => {
  // Verificar si el objeto tiene el atributo "valor"
  if (objeto && objeto.valor) {
    const nombrePokemon = objeto.valor.toLowerCase();

    // Buscar el pokémon en la lista completa
    const foundName = listPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(nombrePokemon)
    );

    const foundHability = listPokemons.filter((pokemon) =>
      pokemon.hability.toLowerCase().includes(nombrePokemon)
    );

    const foundImage = listPokemons.filter((pokemon) =>
      pokemon.image.toLowerCase().includes(nombrePokemon)
    );

    const foundType = listPokemons.filter((pokemon) =>
      pokemon.type.toLowerCase().includes(nombrePokemon)
    );

    if (foundName && foundName.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundName);
      listSearch = foundName;
      return listSearch;
    } else if (foundHability && foundHability.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundHability);
      listSearch = foundHability;
      return listSearch;
    } else if (foundImage && foundImage.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundImage);
      listSearch = foundImage;
      return listSearch;
    } else if (foundType && foundType.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundType);
      listSearch = foundType;
      return listSearch;
    } else {
      console.log("No se encontró ningún Pokémon.");
      listSearch = [];
      return listSearch;
    }
  } else {
    console.log("No se ingresó un valor de búsqueda.");
    listSearch = [];
    return listSearch;
  }
};

export default searchInput;
