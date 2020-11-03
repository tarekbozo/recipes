import React from 'react';
import { FoodApi } from './../api/FoodApi';
import Spinner from './../components/Spinner';

const Recipes = () => {
  return (
    <>
      <Spinner />
      <h1 style={{ padding: '3rem' }}>Ricipes Page</h1>
      <FoodApi />
    </>
  );
};

export default Recipes;
