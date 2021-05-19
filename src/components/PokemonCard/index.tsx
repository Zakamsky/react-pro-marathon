import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './index.module.scss';

interface pokeCard {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  img: string;
}

const PokemonCard: React.FC<pokeCard> = ({ name, attack, defense, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading lvl={5} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
