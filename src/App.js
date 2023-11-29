import React from 'react';
import Index from './pages/Index';
import InternetConnection from './components/InternetConnection';
import './App.css';

const App = () => {
    return (
      <>
        <Index/>
        <InternetConnection/>
      </>
    );
};

export default App;