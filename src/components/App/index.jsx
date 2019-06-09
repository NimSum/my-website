import React, { useState, useEffect } from 'react';
import Splash from '../Splash';
import MainSection from '../MainSection';

const App = () => {

  const [ isLoading, setLoading ] = useState(false);

  const updateLoading = (bool) => {
    setLoading(bool)
  }



  return isLoading
    ? <div>HIII</div>
    : <div className="App">
        < Splash setLoading={ updateLoading } />
        < MainSection />
      </div>
}

export default App;
