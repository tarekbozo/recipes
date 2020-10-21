import React, { useContext } from 'react';
import { AuthContext } from './../../context/LoginContext';

type FormElm = React.FormEvent<HTMLFormElement>;

const LogOutForm = () => {
  const { setUsername, setPassword, setLoggedIn } = useContext(AuthContext);

  const handelSubmit = (e: FormElm) => {
    e.preventDefault();
    try {
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handelSubmit} className='mb-0 pt-2 pt-md-0'>
      <div className='row align-items-center'>
        <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
          <input
            onChange={(e) => setUsername(e.target.value)}
            name='username'
            className='form-control form-control-sm input-dark'
            type='text'
            placeholder='Username'
            autoComplete='off'
          />
        </div>
        <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            className='form-control form-control-sm input-dark'
            type='password'
            placeholder='Password'
          />
        </div>
        <div className='col-md-auto'>
          <button className='btn btn-success btn-sm'>Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default LogOutForm;
