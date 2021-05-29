import React from 'react';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Loader from '../../components/Loader';
import s from '../Pokedex/index.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';

export interface iPokemonProps {
  id: number | string;
}

const Pokemon: React.FC<iPokemonProps> = ({ id }) => {
  const { data, isLoaded, isError } = useData<PokemonsRequest>('getPokemonSolo', {}, [], id);

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
    <Layout>
      {isLoaded && <Loader />}
      {!isLoaded && data && (
        <div className={s.pokemonsDeck}>
          <PokemonCard
            // key={data.id}
            name={data.name}
            attack={data.stats.attack}
            defense={data.stats.defense}
            types={data.types}
            img={data.img}
          />
        </div>
      )}
    </Layout>
  );
};

export default Pokemon;
