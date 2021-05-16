import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.layout}>
        <div>
          <Heading lvl={1}>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={() => {
              console.log('### button is clicked');
            }}
            yellow
            small
            wide>
            see pokemon
          </Button>
        </div>

        <div>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
