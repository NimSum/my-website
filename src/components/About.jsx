import React, { Component } from 'react'

export class About extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <section className="about-section" id="about">
        <article className="my-story">
        <div className="my-story-container">
          <section className="my-story-beginning">
          <div className="title-container">
            <img src={require('../images/nimsum.jpg')} alt="Nim's Portrait"/> 
            <h3 className="story-title">My Story</h3>
          </div>
            <h4 className="story-beginning">Born and raised in the Philippines,</h4>
            <p>At the age of 13, my family immigrated to Texas, beginning my journey that has brought me here</p>
          </section>
          <section className="my-story-military">
            <h4>USAF Veteran,</h4>
            <p>I joined the U.S Air-force after high school and served as an Aircraft Technician for 6 Years. I am now a <span>proud  military veteran.</span></p>
          </section>
          <section className="my-story-software">
            <h4>Software Engineer,</h4>
            <p>I am now pursuing a career path that I've always had <span>passion</span> for, a career in the Tech Industry.</p>
          </section>
          </div>
        </article>
        <article className="soft-skills">
          
        </article>
        <article className="technical-skills">
          
        </article>
        <div className="next-btn">
            <a href="#portfolio">Portfolio</a>
        </div>
      </section>
    )
  }
}

export default About;

