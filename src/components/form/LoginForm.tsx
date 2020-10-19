import React, { useEffect, useState } from 'react';
import SignInButton from './../navbar/SignInButton';
import SignOutButton from './../navbar/SignOutButton';
import { useHistory } from 'react-router-dom';

interface User {
  email: string;
  password: string;
}
const defaultUser: User = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(defaultUser);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('../../pages/create-recipe');
    localStorage.setItem('email', auth.email);
    alert(auth.email + ' Has logged in');
    setAuth(defaultUser);
  };

  const handelChange = <P extends keyof User>(prop: P, value: User[P]) => {
    setAuth({ ...auth, [prop]: value });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className='login-form'>
        <input
          type='email'
          placeholder='Email'
          value={auth.email}
          onChange={(e) => {
            handelChange('email', e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          value={auth.password}
          onChange={(e) => {
            handelChange('password', e.target.value);
          }}
        />
        <button type='submit' className='signin-btn'>
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
