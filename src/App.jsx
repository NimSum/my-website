import React, { Component } from 'react';
import './index.scss';
import Splash from './components/Splash';
import MainSection from './components/MainSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Splash />
        < MainSection />
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
