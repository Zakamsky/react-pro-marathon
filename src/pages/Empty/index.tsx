import React from 'react';
import Heading from '../../components/Heading';
import Header from '../../components/Header';

interface EmptPage {
  title?: string;
}

const EmptyPage: React.FC<EmptPage> = ({ title }) => {
  return (
    <div>
      <Header />
      <Heading lvl={1}>This is Empty Page for {title}!</Heading>
    </div>
  );
};

export default EmptyPage;
