import React, { useContext } from 'react';
import { SpinnerContext } from './../context/SpinnerContext';
import './spinner.css';

const Spinner = () => {
  const { isSpinnerOn } = useContext(SpinnerContext);

  return isSpinnerOn ? (
    <div className="spinner-overlay">
      <p>Loading...</p>
    </div>
  ) : null;
};

export default Spinner;
