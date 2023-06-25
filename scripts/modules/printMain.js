import { listPokemons } from "../data/getPokemons.js";
import { pokeImg, pokeName, tbody } from "../data/dataDom.js";

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
    // Realizar las acciones necesarias con la información del usuario encontrado
  } else {
    //console.log("Number not found in the array:", enteredCel);
    console.log("no enocontrado");
  }
};

const printPokemonImg = (array) => {
  let container = pokeImg;
  const img = array.image;
  container.innerHTML = `
      <img src="${img}" alt="PokemonSelec" class="color charizardimg">`;
};

const printPokemonName = (array) => {
  let container = pokeName;
  const name = array.name;
  const logotype = imgType(array);
  container.innerHTML = `
      <img src="${logotype}" alt="tipo_fuego" class="white"/>
      <p><h1 class="white">${name}</h1></p>`;
};

const imgType = (array) => {
  const type = array.type;
  if (type === "fire") {
    const logoFire = "../img/fire.png";
    return logoFire;
  } else if (type === "bug") {
    const logoBug = "../img/bug.png";
    return logoBug;
  } else if (type === "water") {
    const logoWater = "../img/water.png";
    return logoWater;
  } else if (type === "grass") {
    const logoGrass = "../img/grass.png";
    return logoGrass;
  } else if (type === "normal") {
    const logoNormal = "../img/normal.png";
    return logoNormal;
  } else {
    console.log("no found type");
  }
};

const printTable = (array) => {
  let container = tbody;
  const type = array.type;
  const hability = array.hability;
  const height = array.height;
  const weight = array.weight;
  const no = array.no;
  const level = array.level;
  container.innerHTML = `
          <tr>
              <td><span>NO.</span> <br />${no}</td>
              <td><span>LEVEL</span> <br />${level}</td>
            </tr>
            <tr>
              <td><span>TYPE</span> <br />${type}</td>
              <td><span>HABILITY</span> <br />${hability}</td>
            </tr>
            <tr>
              <td><span>HEIGHT</span> <br />${height} m</td>
              <td><span>WEIGHT</span> <br />${weight} Kg</td>
          </tr>  
  `;
};
