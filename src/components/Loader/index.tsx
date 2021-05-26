import React from 'react';
import { ReactComponent as LoaderSvg } from './assets/pokeball.svg';

import s from './loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <LoaderSvg />
    </div>
  );
};

export default Loader;
