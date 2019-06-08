import React, { Component } from 'react';
import './index.scss';
import Splash from './components/Splash';
import MainSection from './components/MainSection';

const App = () => {
  return (
    <div className="App">
      < Splash />
      < MainSection />
    </div>
  );
}

export default App;
