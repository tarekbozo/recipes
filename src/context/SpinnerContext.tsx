import React, { useState, createContext } from 'react';

export const SpinnerContext = createContext<any>(null);

const SpinnerContextProvider = ({ children }) => {
  const [isSpinnerOn, setSpinner] = useState(false);

  return (
    <SpinnerContext.Provider value={{ isSpinnerOn, setSpinner }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerContextProvider;
