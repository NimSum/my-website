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
        <article className="my-skillset">
          <section className="skill-levels">
            <ul>
              <li></li>
              <li>Novice</li>
              <li>Intermediate</li>
              <li>Advanced</li>
              <li>Expert</li>
            </ul>
          </section>
          <section className="languages">
            <ul className="skill-level-container">
              <li>
                <span className="lang-img-cont"><img src={require('../images/react.svg')} alt="React" title="React"/></span>
                <span className="level react"></span>
              </li>
              <li>
                <span className="lang-img-cont"><img src={require('../images/sass.svg')} alt="SASS" title="SASS"/><img src={require('../images/css.svg')} alt="CSS" title="CSS"/></span>
                <span className="level sass-css"></span>
              </li>
              <li>
                <span className="lang-img-cont"><img src={require('../images/html.svg')} alt="HTML" title="HTML"/></span>
                <span className="level html"></span>
              </li>
              <li>
                <span className="lang-img-cont"><img src={require('../images/js.svg')} alt="Javascript" title="Javscript"/></span>
                <span className="level javascript"></span>
              </li>
              <li>
                <span className="lang-img-cont"><img src={require('../images/redux.svg')} alt="Redux" title="Redux"/></span>
                <span className="level redux"></span>
              </li>
              <li>
                <span className="lang-img-cont"><img src={require('../images/node.svg')} alt="Node JS" title="Node JS"/></span>
                <span className="level node"></span>
              </li>
            </ul>
          </section>
        </article>
        <div className="next-btn">
            <a href="#portfolio">Portfolio</a>
        </div>
      </section>
    )
  }
}

export default About;

