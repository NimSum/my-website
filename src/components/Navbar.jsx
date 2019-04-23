import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <header> 
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
