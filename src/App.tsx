import React from 'react';
import Navbar from './components/navbar/NavBar';
import './layout/styles.css';
import Routing from './routes/Routing';
import LoginContext from './context/LoginContext';
import Footer from './components/Footer';
import SpinnerContext from './context/SpinnerContext';

const App: React.FC = () => {
  return (
    <>
      <LoginContext>
        <SpinnerContext>
          <Navbar />

          <Routing />
          <Footer />
        </SpinnerContext>
      </LoginContext>
    </>
  );
};

export default App;
