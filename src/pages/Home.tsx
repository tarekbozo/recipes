import React, { useContext, useState } from 'react';
import { AuthContext } from './../context/LoginContext';

type FormElm = React.FormEvent<HTMLFormElement>;

const Home = () => {
  const { setUsername, username } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onsubmitHandler = (e: FormElm) => {
    e.preventDefault();
    try {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('email', email);

      console.log('user was successfully created');
    } catch (error) {
      console.log(error);
    }
  };

  const saveUser = (e: any) => {
    setUsername(e);
    localStorage.setItem('username', e);
  };
  return (
    <div className='container py-md-5'>
      <div className='row align-items-center'>
        <div className='col-lg-7 py-3 py-md-5'>
          <h1 className='display-3'>
            Easy recipes and cooking hacks right to your inbox.
          </h1>
          <p className='lead text-muted'>The ultimate pocket recipe manager</p>
        </div>
        <div className='col-lg-5 pl-lg-5 pb-3 py-lg-5'>
          <form onSubmit={onsubmitHandler}>
            <div className='form-group'>
              <label htmlFor='username-register' className='text-muted mb-1'>
                <small>Username</small>
              </label>
              <input
                onChange={(e) => saveUser(e.target.value)}
                name='username'
                className='form-control'
                type='text'
                placeholder='Pick a username'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email-register' className='text-muted mb-1'>
                <small>Email</small>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                className='form-control'
                type='text'
                placeholder='you@example.com'
                autoComplete='off'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password-register' className='text-muted mb-1'>
                <small>Password</small>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                className='form-control'
                type='password'
                placeholder='Create a password'
              />
            </div>
            <button
              type='submit'
              className='py-3 mt-4 btn btn-lg btn-success btn-block'
            >
              Sign up for RecipesApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
