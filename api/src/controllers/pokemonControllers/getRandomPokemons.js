const axios = require("axios");
const getData = require("../../utils/getData");

const getRandomPokemons = async () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  let pokemonCount = 0;
  let pokemonsPromises = [];

  while (pokemonCount < 12) {
    try {
      const random = Math.floor(Math.random() * 1281) + 1; 
      const endpoint = `${baseUrl}${random}`;

      const response = await axios.get(endpoint);
      const data = response.data;
      const pokeData = getData(data);
      pokemonsPromises.push(pokeData);
      pokemonCount += 1;
    } catch (error) {
      console.error(`Error fetching Pokémon details: ${error.message}`);
    }
  }
    const pokemons = await Promise.all(pokemonsPromises)

    console.log(pokemons);
    return pokemons;
};

module.exports = getRandomPokemons;

