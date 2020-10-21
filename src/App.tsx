import React from 'react';
import Navbar from './components/navbar/NavBar';
import './layout/styles.css';
import Routing from './routes/Routing';
import LoginContext from './context/LoginContext';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <LoginContext>
        <Navbar />
        <Routing />
        <Footer />
      </LoginContext>
    </>
  );
};

export default App;
