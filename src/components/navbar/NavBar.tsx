import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Search from './Search';
import SignOutButton from './SignOutButton';
import SignInButton from './SignInButton';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link to='/' className='navbar__brand'>
          Home
        </Link>
        <ul className='navbar__nav'>
          <li className='navbar__item'>
            <Link to='/recipes' className='navbar__link'>
              Recipes
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/ingredients' className='navbar__link'>
              Ingredients
            </Link>
          </li>
        </ul>
        <Search />
        <div className='auth'>
          <SignInButton />
          <SignOutButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
