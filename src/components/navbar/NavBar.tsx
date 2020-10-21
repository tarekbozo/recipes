import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../form/LoginForm';
import LogOutForm from './../form/LogOutForm';
import { AuthContext } from './../../context/LoginContext';

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <header className='header-bar bg-primary mb-3'>
      <div className='container d-flex flex-column flex-md-row align-items-center p-3'>
        <h4 className='my-0 mr-md-auto font-weight-normal'>
          <Link to='/' className='text-white'>
            Recipes App
          </Link>
        </h4>
        {loggedIn ? <LoginForm /> : <LogOutForm />}
      </div>
    </header>
  );
};

export default Navbar;
