import { PokemonType } from './PokemonType';

interface Pokemon {
  name: string;
  art?: string;
  sprite?: string;
  type1: PokemonType;
  type2?: PokemonType;
}

export { Pokemon };