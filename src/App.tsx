import React from 'react';
import Navbar from './components/navbar/NavBar';
import './layout/styles.scss';
import Routing from './routes/Routing';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};

export default App;
