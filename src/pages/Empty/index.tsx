import React from 'react';
import Heading from '../../components/Heading';

interface EmptPage {
  title?: string;
}

const EmptyPage: React.FC<EmptPage> = ({ title }) => {
  return (
    <>
      <Heading lvl={1}>This is Empty Page for {title}!</Heading>
    </>
  );
};

export default EmptyPage;
