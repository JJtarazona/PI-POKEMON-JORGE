const axios = require("axios");
const { Pokemon, Type } = require("../db");

const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async (req, res) => {
  try {
    const allPokemons = await axios.get(URL);
    const { data } = allPokemons;

    const pokemons = data.results.map((pokemon) => {
      return {
        id: pokemon.url.split("/")[6],
        name: pokemon.name,
        hp: pokemon.hp,
      };
    });

    return res.status(200).json(pokemons);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(URL + "/" + id);
    const { name, img, hp, attack, defense, speed, height, weight } = data;

    const pokemon = {
      id,
      name,
      img,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    };

    return pokemon.name
      ? res.status(200).json(pokemon)
      : res.status(404).send("Pokedex fuera de servicio, los siento😁");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const getPokemonByName = () => {};

const postPokemon = () => {};

const typesPokemon = () => {};

module.exports = {
  getPokemon,
  getPokemonById,
  getPokemonByName,
  postPokemon,
  typesPokemon,
};
