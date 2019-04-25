import React, { Component } from 'react'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPosition: 'Home'
    }

  }
  trackPosition = () => {
    window.addEventListener("scroll", event => {
      let totalHeight = (document.body.scrollHeight/4) / 100;
      console.log(totalHeight, totalHeight*2, totalHeight*3)
      // switch (true) {
      //   case totalHeight 
      // }
    })
  }

  render() {
    this.trackPosition();
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
