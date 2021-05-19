import React from 'react';
import cn from 'classnames';

import s from './button.module.scss';

interface buttonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: string;
  wide?: boolean;
}

const Button: React.FC<buttonProps> = ({ children, onClick, color = 'green', size, wide }) => {
  return (
    <button
      type="button"
      className={cn(s.button, { [s.yellow]: color === 'yellow', [s.small]: size === 'small', [s.wide]: wide })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
