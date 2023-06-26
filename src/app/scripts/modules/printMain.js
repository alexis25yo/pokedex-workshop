import { listPokemons } from "../data/getPokemons";
import { printPokemonImg } from "./printPokemonImg";
import { printPokemonName } from "./printPokemonName";
import printTable from "./printTable";
import printTable2 from "./printTable2";

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
