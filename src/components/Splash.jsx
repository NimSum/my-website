import React, { Component } from 'react';

export class Splash extends Component {
  stuff() {
    console.log('hi')
  }
  render() {
    return (
      <section className="splash" id="home">
        <article>
          <h1>Hi</h1>
          <div className="splash-intro">
            <p>I'm Nimrod Garcia, </p>  
            <p>a Software Engineer</p>
          </div>
          <div className="icon-container">
            <a href="https://github.com/NimSum" target="_blank" rel="noopener noreferrer">
              <img src={require('../images/github.svg')} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/nimrod-garcia/" target="_blank" rel="noopener noreferrer">
              <img src={require('../images/linked-in.svg')} alt="linked in" />
            </a>
          </div>
        </article>
        <div className="arrow-down" onClick={this.stuff}>
        <a href="#about">About me</a>
        </div>
        <span className="arrow-down-desc">ABOUT ME</span>
        <span className="photo-credit">Photo by Joel Filipe on Unsplash</span>
      </section>
    )
  }
}

export default Splash
