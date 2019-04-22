import React, { Component } from 'react'
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

export class MainSection extends Component {
  render() {
    return (
      <main className="main-section">
        < Navbar />
        < About />
        < Portfolio />
        < Contact />
      </main>
    )
  }
}

export default MainSection
