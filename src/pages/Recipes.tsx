import React from 'react';
import { FoodApi } from './../api/FoodApi';

const Recipes = () => {
  return (
    <>
      <h1 style={{ padding: '3rem' }}>Ricipes Page</h1>

      <FoodApi />
    </>
  );
};

export default Recipes;
