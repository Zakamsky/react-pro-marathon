import React from 'react';
import cn from 'classnames';
import './index.css';
import s from './App.module.scss';

const App = () => {
  return <div className={cn(s.header, 'text-huge')}>This is App component!!!!</div>;
};

export default App;
