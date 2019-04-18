import React, { Component } from 'react'
import Navbar from './Navbar';
import About from './About';

export class MainSection extends Component {
  render() {
    return (
      <main className="main-section">
        < Navbar />
        < About />
      </main>
    )
  }
}

export default MainSection
