import React, { Component } from 'react';
export class Splash extends Component {
  stuff() {
    console.log('hi')
  }
  render() {
    return (
      <section className="splash">
        <article>
          <h1>Hi</h1>
          <div className="splash-intro">
            <p>I'm Nimrod Garcia, </p>  
            <p>a Front-end Software Engineer</p>
          </div>
        </article>
        <div className="arrow-down" onClick={this.stuff}>
        </div>
        <span className="arrow-down-desc">ABOUT</span>
        <span className="photo-credit">Photo by Joel Filipe on Unsplash</span>
      </section>
    )
  }
}

export default Splash
