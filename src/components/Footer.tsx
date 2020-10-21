import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-top text-center small text-muted py-3'>
      <p>
        <Link to='/' className='mx-1'>
          Home
        </Link>{' '}
        |{' '}
        <Link to='/ingredients' className='mx-1' href='/about-us'>
          Ingredients
        </Link>{' '}
        |{' '}
        <Link to='/Recipes' className='mx-1' href='/terms'>
          Recipes
        </Link>
      </p>
      <p className='m-0'>
        Copyright &copy; 2020{' '}
        <a href='/' className='text-muted'>
          ComplexApp
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
