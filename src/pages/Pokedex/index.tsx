import React, { useState } from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import s from './index.module.scss';
import Loader from '../../components/Loader';
import useData from '../../hook/getData';
import { IPokemon, PokemonsRequest } from '../../interface/pokemons';

import useDebounce from '../../hook/useDebounce';

interface IQuery {
  limit?: number;
  name?: string;
}

const Pokedex: React.FC = () => {
  const [searchvalue, setSearchvalue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });
  const deboncedValue = useDebounce(searchvalue, 600);

  // const query = useMemo(() => ({
  //   name: searchvalue
  // }), [searchvalue])

  const { data, isLoaded, isError } = useData<IPokemon>('getPokemons', query, [deboncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchvalue(e.target.value);
    setQuery((prevState: IQuery) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  if (isError) {
    return (
      <>
        <Header />
        <Layout>
          <Heading lvl={1}>Error!!!</Heading>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout>
        <Heading lvl={1}>
          {!isLoaded && data && data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchvalue} onChange={handleSearchChange} />
        </div>
        {
          isLoaded && <Loader />
          // todo: я вот нашел какой то страный способ условного отображения, наверняка есть что то получше, может подскажещь?
        }
        {!isLoaded && (
          <div className={s.pokemonsDeck}>
            {data &&
              data.pokemons.map(({ id, name, stats, types, img }: PokemonsRequest) => (
                <PokemonCard
                  key={id}
                  name={name}
                  attack={stats.attack}
                  defense={stats.defense}
                  types={types}
                  img={img}
                />
              ))}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Pokedex;
