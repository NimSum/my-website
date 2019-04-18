import React, { Component } from 'react';
export class Splash extends Component {
  stuff() {
    console.log('hi')
  }
  render() {
    return (
      <section className="splash">
        <h1>Hi</h1>
        <div className="splash-intro">
          <p>I'm Nimrod Garcia, a Front-end Software Engineer</p>
        </div>
        <span className="photo-credit">Photo by Joel Filipe on Unsplash</span>
        <div className="arrow-down" onClick={this.stuff}>
        </div>
      </section>
    )
  }
}

export default Splash
