import React from 'react';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';

import s from './header.module.scss';

interface iMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: iMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '#!',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#!',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#!',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#!',
  },
];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrap}>
          {MENU.map(({ id, value, link }) => (
            <a key={id} href="{ link }" className={s.menuLink}>
              {value}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
