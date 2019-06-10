import React from 'react';

const Splash = () => (
    <section className="splash" id="home">
      <img 
        className='bg-image' 
        src={require("../../images/splash.jpg")} 
        alt="sd"/>
      <article>
        <h1>Hi</h1>
        <div className="splash-intro">
          <p>I'm <span>Nimrod Garcia,</span> </p>  
          <p>a <span>Front-end Software Engineer</span></p>
        </div>
        <div className="splash-icon-container">
          <a href="https://github.com/NimSum" target="_blank" rel="noopener noreferrer">
            <img src={require('../../images/github-blue.svg')} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/nimrod-garcia/" target="_blank" rel="noopener noreferrer">
            <img src={require('../../images/linked-in.svg')} alt="linked in" />
          </a>
        </div>
      </article>
      <div className="arrow-down-container">
        <div className="arrow-down">
          <a href="#about">About me</a>
        </div>
        <span className="arrow-down-desc">ABOUT ME</span>
      </div>
      <span className="photo-credit">Photo by Joel Filipe on Unsplash</span>
    </section>
)

export default Splash;
