import React, { Component } from 'react';
import './index.scss';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import Porfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <About />
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
