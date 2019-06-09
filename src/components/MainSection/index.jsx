import React from 'react'
import Navbar from '../Navbar';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';

const MainSection = () => {
  return (
    <main className="main-section">
      < Navbar />
      < About />
      < Portfolio />
      < Contact />
    </main>
  )
}

export default MainSection
