import React, { Component } from 'react'

export class About extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const circleGenerator = amount => {
      const result = [];
      for (let i = 0; i < amount; i++ ) {
        result.push(<span className="circle-level"></span>)
      }
      return result;
    }
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
          <section className="languages">
            <ul className="skill-level-container">
              <li className="level-title">
                <span>Novice</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
              </li>
              <li>
                <span className="lang-img-cont">React<img src={require('../images/react.svg')} alt="React" title="React"/></span>
                <div className="level"><div className="circle-container react">
                  {circleGenerator(16)}
                  </div></div>
              </li>
              <li>
                <span className="lang-img-cont">SASS<img src={require('../images/sass.svg')} alt="SASS" title="SASS"/></span>
                <div className="level"><div className="circle-container sass">
                  {circleGenerator(16)}
                  </div></div>
              </li>
              <li>
                <span className="lang-img-cont">CSS<img src={require('../images/css.svg')} alt="CSS" title="CSS"/></span>
                <div className="level"><div className="circle-container css">
                  {circleGenerator(16)}
                  </div></div>
              </li>
              <li>
                <span className="lang-img-cont">HTML5<img src={require('../images/html.svg')} alt="HTML" title="HTML"/></span>
                <div className="level"><div className="circle-container html">
                  {circleGenerator(16)}
                  </div></div>
              </li>
              <li>
                <span className="lang-img-cont">Javascript<img src={require('../images/js.svg')} alt="Javascript" title="Javscript"/></span>
                <div className="level"><div className="circle-container javascript">
                  {circleGenerator(16)}
                  </div></div>
              </li>
              <li>
                <span className="lang-img-cont">Redux<img src={require('../images/redux.svg')} alt="Redux" title="Redux"/></span>
                <div className="level"><div className="circle-container redux">
                  {circleGenerator(16)}
                  </div></div>
              </li>
              <li>
                <span className="lang-img-cont">Node.js<img src={require('../images/node.svg')} alt="Node JS" title="Node JS"/></span>
                <div className="level"><div className="circle-container node">
                  {circleGenerator(16)}
                  </div></div>
              </li>
            </ul>
          </section>
        </article>
      </section>
    )
  }
}

export default About;

