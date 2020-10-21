import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/LoginContext';

const LoginForm = (props: any) => {
  const { setLoggedIn } = useContext(AuthContext);
  const handelLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
  };
  return (
    <div className='flex-row my-3 my-md-0'>
      <Link to='#' className='text-white mr-2 header-search-icon'>
        <i className='fas fa-search'></i>
      </Link>
      <span className='mr-2 header-chat-icon text-white'>
        Hey
        <strong> {JSON.parse(localStorage.getItem('username'))}</strong>
        <span className='chat-count-badge text-white'> </span>
      </span>
      <Link to='#' className='mr-2'>
        <img
          alt='avatar'
          className='small-header-avatar'
          src='https://picsum.photos/200'
        />
      </Link>
      <Link to='/create-recipe' className='btn btn-sm btn-success mr-2'>
        Create Recipe
      </Link>
      <button onClick={handelLogOut} className='btn btn-sm btn-secondary'>
        Sign Out
      </button>
    </div>
  );
};

export default LoginForm;
