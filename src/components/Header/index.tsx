import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import { GENERAL_MENU } from '../../routes';

import { ReactComponent as PokemonLogoSvg } from './assets/logo.svg';
import s from './header.module.scss';

const Header: React.FC = () => {
  const path = usePath();
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
