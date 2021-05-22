import React from 'react';

import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Button from '../../components/Button';

import teamRoket from './assets/team_rocket.png';
import s from './notfound.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.root}>
      <img src={teamRoket} alt="Team Rocket" />
      <p className={s.title}>
        <strong className={s.white}>The rocket team</strong> has won this time.
      </p>
      <Button onClick={() => navigate(LinkEnum.HOME)} color="yellow">
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
