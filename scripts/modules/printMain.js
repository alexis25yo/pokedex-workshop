import { listPokemons } from "../data/getPokemons.js";
import { printPokemonImg } from "./printPokemonImg.js";
import { printPokemonName } from "./printPokemonName.js";
import printTable from "./printTable.js";
import printTable2 from "./printTable2.js";

export const getInfo = (clickedElement) => {
  const foundPokemon = listPokemons.find(
    (pokemon) => pokemon.image === clickedElement
  );

  if (foundPokemon) {
    //console.log("User information:", foundCel);
    console.log(foundPokemon);
    printPokemonImg(foundPokemon);
    printPokemonName(foundPokemon);
    printTable(foundPokemon);
    printTable2(foundPokemon);
  } else {
    console.log("no enocontrado");
  }
};
