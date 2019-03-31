import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Splash from './components/Splash';
import About from './components/About';
import Porfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Splash />
      {/* HEADER
          SPLASH
          ABOUT
          WORK
          CONTACT-FOOTER */}
        {/* stuff for dee page */}
      </div>
    );
  }
}

export default App;
