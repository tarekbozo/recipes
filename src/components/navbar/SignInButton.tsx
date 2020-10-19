import React from 'react';
import { useHistory } from 'react-router-dom';

const SignInButton = () => {
  const history = useHistory();
  return (
    <button
      className='signInButton'
      onClick={() => history.push('../../pages/LoginForm')}
    >
      Log In
    </button>
  );
};

export default SignInButton;
