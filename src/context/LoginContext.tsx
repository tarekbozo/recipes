import React, { createContext, useState } from 'react';

type FormElm = React.FormEvent<HTMLFormElement>;

export const AuthContext = createContext<any>(null);

const LoginContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<any>(
    Boolean(localStorage.getItem('username'))
  );

  const [password, setPassword] = useState<any>('');
  const [loggedIn, setLoggedIn] = useState<any>();

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        setPassword,
        setLoggedIn,
        loggedIn,
        password,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default LoginContext;
