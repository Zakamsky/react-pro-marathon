import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import s from './index.module.scss';
import Loader from '../../components/Loader';
import req from '../../utils/request';

interface iStats {
  [n: string]: number;
}
/* eslint-disable camelcase */
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
/* eslint-enable camelcase */

interface iData {
  total: string;
  count: string;
  offset: string;
  limit: string;
  pokemons: PokInterface[];
}

const usePokemons = () => {
  const [data, setData] = useState<iData>({} as iData);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoaded(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoaded(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoaded,
    isError,
  };
};

const Pokedex: React.FC = () => {
  const { data, isLoaded, isError } = usePokemons();

  if (isError) {
    return <div> isError </div>;
  }
  return (
    <>
      <Header />
      <Layout>
        {
          isLoaded && <Loader />
          // todo: я вот нашел какой то страный способ условного отображения, наверняка есть что то получше, может подскажещь?
        }
        {!isLoaded && (
          <Heading lvl={1}>
            {data.total} <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
        )}
        <div className={s.pokemonsDeck}>
          {!isLoaded &&
            data.pokemons.map(({ id, name, stats, types, img } /* : PokInterface */) => (
              <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} types={types} img={img} />
            ))}
        </div>
      </Layout>
    </>
  );
};

export default Pokedex;
