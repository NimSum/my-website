import React, { Component } from 'react'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>NG</h1>  
        <nav>
          <ul>
            <li>HOME</li>
            <li>AOUT</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
