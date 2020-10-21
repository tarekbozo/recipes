import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import Recipes from './../pages/Recipes';
import Ingredients from './../pages/Ingredients';
import NotFound from './../pages/NotFound';
import CreateRecipe from './../pages/CreateRecipe';
import LoginForm from '../components/form/LoginForm';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/ingredients' component={Ingredients} />
        <Route path='/loginForm' component={LoginForm} />
        <Route path='/create-recipe' component={CreateRecipe} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routing;
