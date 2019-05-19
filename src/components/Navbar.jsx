import React, { Component } from 'react'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.prevPos = 0;
    this.animationStyle = '';
    this.state = {
      currPosition: 'Home'
    }
  }

  animationDirection = (totalHeight) => {
    if (this.prevPos !== totalHeight) {
      this.animationStyle =  this.prevPos < totalHeight 
        ? 'slide-right' 
        : 'slide-left';
      this.prevPos = totalHeight;
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let totalHeight = Math.ceil((window.pageYOffset/document.body.scrollHeight) * 100);
      this.animationDirection(totalHeight);
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
    return (
      <header> 
        <nav>
          <ul>
            <li className={this.state.currPosition === 'home' 
            ? this.animationStyle : undefined}><a href="#home">HOME</a></li>
            <li className={this.state.currPosition === 'about' 
            ? this.animationStyle : undefined}><a href="#about">ABOUT</a></li>
            <li className={this.state.currPosition === 'portfolio' 
            ? this.animationStyle : undefined}><a href="#portfolio">PORTFOLIO</a></li>
            <li className={this.state.currPosition === 'contact' 
            ? this.animationStyle : undefined}><a href="#contact">CONTACT</a></li>
            <li className="resume-download">
              <a
                href={require('../images/nimrod-garcia-resume.pdf')}
                download>
                Download My Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
