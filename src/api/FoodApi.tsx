import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { SpinnerContext } from './../context/SpinnerContext';

export const FoodApi = () => {
  const [recipes, setRecipes] = useState([]);
  const { setSpinner } = useContext(SpinnerContext);

  const getData = async () => {
    setSpinner(true);
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await axios.get(API_URL);
      setRecipes(res.data);

      console.log(res);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {recipes.map((items) => (
        <div key={items.id}>
          <h2>{items.title}</h2>
          <p>{items.body}</p>
        </div>
      ))}
    </>
  );
};
