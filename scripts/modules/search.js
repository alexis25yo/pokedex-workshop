import { listPokemons } from "../data/getPokemons.js";

const searchInput = (objeto) => {
  // Verificar si el objeto tiene el atributo "valor"
  if (objeto && objeto.valor) {
    const nombrePokemon = objeto.valor.toLowerCase();

    // Buscar el pokémon en la lista completa
    const foundName = listPokemons.find((pokemon) =>
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
    }
    if (foundHability && foundHability.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundHability);
    }
    if (foundImage && foundImage.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundImage);
    }
    if (foundType && foundType.length > 0) {
      console.log("¡Pokémon encontrado!");
      console.log(foundType);
    }
  }
};

export default searchInput;
