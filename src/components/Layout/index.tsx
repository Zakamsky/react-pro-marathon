import React from 'react';
import cn from 'classnames';

import s from './layout.module.scss';

interface layoutProps {
  className?: string;
}

const Layout: React.FC<layoutProps> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
