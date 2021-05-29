import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Pokedex from './pages/Pokedex';
import Pokemon, { iPokemonProps } from './pages/Pokemon';

interface gMenu {
  title: string;
  link: LinkEnum;
  component: (props: React.PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCS = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: gMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCS,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECOND_MENU: gMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: iPokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: React.PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_MENU].reduce((acc: IAccMenu, item: gMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
