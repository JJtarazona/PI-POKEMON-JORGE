const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  getPokemon,
  getPokemonById,
  getPokemonByName,
  postPokemon,
  typesPokemon,
} = require("../controllers/pokeControllers");

// Configurar los routers

router.get("/pokemon", getPokemon);

router.get("/pokemon/:id", getPokemonById);

router.get("/pokemon/:name", getPokemonByName);

router.post("/pokemon", postPokemon);

router.get("/types", typesPokemon);

// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
