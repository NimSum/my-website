import React, { Component } from 'react'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.prevPos = null;
    this.state = {
      currPosition: 'Home'
    }
  }

  trackPosition = () => {
    window.addEventListener("scroll", () => {
      let totalHeight = Math.ceil((window.pageYOffset/document.body.scrollHeight) * 100);
      console.log(this.prevPos <= totalHeight)
      this.prevPos = totalHeight;
      switch (true) {
        case totalHeight >= 24 && totalHeight <=47:
          if (this.state.currPosition !== 'about') {
            this.setState({currPosition: 'about'})
          };
        break;
        case totalHeight >= 48 && totalHeight <=71:
        if (this.state.currPosition !== 'portfolio') {
          this.setState({currPosition: 'portfolio'})
        };
        break;
        case totalHeight >= 72:
        if (this.state.currPosition !== 'contact') {
          this.setState({currPosition: 'contact'})
        };
        break;
        default:
          if (this.state.currPosition !== 'home') {
            this.setState({currPosition: 'home'})
          };
      }
    })
  }

  render() {
    this.trackPosition();
    return (
      <header> 
        <nav>
          <ul>
            <li className={this.state.currPosition === 'home' 
            ? 'curr-section' : undefined}><a href="#home">HOME</a></li>
            <li className={this.state.currPosition === 'about' 
            ? 'curr-section' : undefined}><a href="#about">ABOUT</a></li>
            <li className={this.state.currPosition === 'portfolio' 
            ? 'curr-section' : undefined}><a href="#portfolio">PORTFOLIO</a></li>
            <li className={this.state.currPosition === 'contact' 
            ? 'curr-section' : undefined}><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
