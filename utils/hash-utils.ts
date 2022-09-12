import pokemonList from '~/data/pokemon-list.json';

const hashToPokemon = (hash: string) => {
  const pokemonNames = hash.split('#')[1].split('+');
  
  const pokemons = [];
  pokemonNames.forEach(name => {
    const foundPokemon = pokemonList.find(x => x.name.toLowerCase() === name.toLowerCase());
    if (foundPokemon) {
      pokemons.push(foundPokemon);
    }
  });
  
  return pokemons;
};

export { hashToPokemon };
