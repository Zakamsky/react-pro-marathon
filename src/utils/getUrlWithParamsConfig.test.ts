import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host, и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: 'api/v-1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и {name: pickachu}, на выходе получить объект с полями pathname, protocol, host, и query: {name: pickachu}', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'pickachu' });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: 'api/v-1/pokemons',
        query: { name: 'pickachu' },
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemonSolo" и {id: 25}, на выходе получить объект с полями pathname, protocol, host, и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemonSolo', { id: 25 });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: 'api/v-1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "createPokemon" и {name: pickachu}, на выходе получить объект с полями pathname, protocol, host, и пустым query и body: {name: pickachu}', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'pickachu' });
    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: 'api/v-1/pokemon/create',
        query: {},
      },
      body: { name: 'pickachu' },
    });
  });

  test('Должна принимать два аргумента "updatePokemon" и {id: 25}, на выходе получить объект с полями pathname, protocol, host, и пустым query и body: {name: pickachu}', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 25, name: 'pickachu' });
    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: 'api/v-1/pokemon/25',
        query: {},
      },
      body: { name: 'pickachu' },
    });
  });

  test('Должна принимать два аргумента "deletePokemon" и {id: 25}, на выходе получить объект с полями pathname, protocol, host, и пустым query и body', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });
    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: 'api/v-1/pokemon/25/delete',
        query: {},
      },
      body: {},
    });
  });
});
