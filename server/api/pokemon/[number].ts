import { capitalizeFirstLetter } from '~~/utils/string-utils';
import { PokemonClient } from 'pokenode-ts';
import { Pokemon } from '~/types/Pokemon';

export default defineEventHandler(async (event): Promise<Pokemon> => {
  const { params } = event.context;
  const { number } = params;

  const client = new PokemonClient();

  const { name, sprites, types } = await client.getPokemonById(number);

  return {
    name: capitalizeFirstLetter(name),
    art: sprites.other['official-artwork']['front_default'],
    sprite: sprites['front_default'],
    type1: types[0]?.type.name,
    type2: types[1]?.type.name
  }
});