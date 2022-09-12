const POKEMON_QUANTITY = 905;

export default defineEventHandler(async (event) => {
  const pokemonList = [];

  for (let pokedexNumber = 1; pokedexNumber <= POKEMON_QUANTITY; pokedexNumber++) {
    const pokemon = await $fetch(`/api/pokemon/${pokedexNumber}`);
    pokemonList.push(pokemon)
  }

  return pokemonList;
});