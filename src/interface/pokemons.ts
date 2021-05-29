export interface IPokemon {
  total: number;
  pokemons: PokemonsRequest[];
}

const pokemon = {
  name_clean: 'bulbasaur',
  abilities: ['overgrow', 'chlorophyll'],
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
  types: ['grass', 'poison'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  id: 1,
  is_default: true,
  order: 1,
  weight: 69,
};

export type PokemonsRequest = typeof pokemon;

/* eslint-disable camelcase */

/*
    interface iStats {
        [n: string]: number;
    }


    interface PokInterface {
        // name_clean: string;
        // abilities: string;
        stats: iStats;
        types: string[];
        img: string;
        name: string;
        // base_experience: number;
        // height: number;
        id: number;
        // is_default: boolean;
        // order: number;
        // weight: number;
    }
    */

/* eslint-enable camelcase */

/*
    interface iData {
        total: string;
        count: string;
        offset: string;
        limit: string;
        pokemons: PokInterface[];
    }
    */
