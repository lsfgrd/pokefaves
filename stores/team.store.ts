import { reactive } from 'vue'
import { Pokemon } from '~~/types/Pokemon';

const teamStore = reactive<{
  pokemons: Pokemon[],
  setPokemons: (pokemons: Pokemon[]) => void,
  addPokemon: (pokemon: Pokemon) => void,
  removePokemon: (pokemon: Pokemon) => void,
  isSelected: (pokemon: Pokemon) => boolean
}>({
  pokemons: [],
  setPokemons(pokemons) {
    this.pokemons = pokemons;
  },
  addPokemon(pokemon) {
    if (this.pokemons.length < 6 && !this.isSelected(pokemon)) {
      this.pokemons.push(pokemon);

      const currentHash = window.location.hash;
      const lowerCasePokemon = pokemon.name.toLowerCase();

      if (currentHash) {
        window.location.hash = `${currentHash}+${lowerCasePokemon}`;
      } else {
        window.location.hash = `#${lowerCasePokemon}`;
      }
    }
  },
  removePokemon(pokemon) {
    const pokemons = [...this.pokemons];
    pokemons.splice(pokemons.findIndex(x => x.name === pokemon.name), 1);

    this.setPokemons(pokemons);
    const lowerCasePokemon = pokemon.name.toLowerCase();
    
    const currentHash = window.location.hash;
    window.location.hash = currentHash.replace(lowerCasePokemon, '')
  },
  isSelected(pokemon) {
    return (this.pokemons.filter(x => x.name === pokemon.name)?.length || 0) !== 0;
  }
});

export { teamStore };