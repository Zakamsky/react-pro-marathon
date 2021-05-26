import React from 'react';

import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import s from './home.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Layout className={s.layout}>
        <div>
          <Heading lvl={1}>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </Heading>
          <Heading lvl={3}> test </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button
            onClick={() => navigate(LinkEnum.HOME)}
            // color={'yellow'}
            // size={'small'}
            // wide
          >
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
