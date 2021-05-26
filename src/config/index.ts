export interface iConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [n: string]: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}

export const config: iConfig = {
  client: {
    server: {
      protocol: 'https',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: 'api/v-1/pokemons',
        },
      },
      getPokemonSolo: {
        method: 'GET',
        uri: {
          pathname: 'api/v-1/pokemon/',
        },
      },
    },
  },
};

export default config;

export type ConfigEndpointKeyType = keyof typeof config.client.endpoint;
