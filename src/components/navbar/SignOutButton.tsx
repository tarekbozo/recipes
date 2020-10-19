import React from 'react';
import { useHistory } from 'react-router-dom';

const SignOutButton = () => {
  const history = useHistory();
  return (
    <button className='signOutButton' onClick={() => history.push('/')}>
      Log out
    </button>
  );
};

export default SignOutButton;
