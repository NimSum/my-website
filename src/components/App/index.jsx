import React, { Component, useState, useEffect } from 'react';
import Splash from '../Splash';
import MainSection from '../MainSection';
import loadingIcon from '../../images/loading.svg';

export class App extends Component {


  render() {
    return (
    <div className="App">
      < Splash />
      < MainSection />
    </div>
    )
  }
} 

export default App;
