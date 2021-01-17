import React from 'react';
import Templates from './templates';
import { useParams } from 'react-router-dom';

const Home = () => {
  let { id } = useParams<{ id: string }>();

  return <Templates />;
};

export default Home;
