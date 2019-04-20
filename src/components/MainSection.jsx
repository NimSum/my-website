import React, { Component } from 'react'
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

export class MainSection extends Component {
  render() {
    return (
      <main className="main-section">
        < Navbar />
        < About />
        < Contact />
      </main>
    )
  }
}

export default MainSection
