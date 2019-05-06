import React, { Component } from 'react';
import { projects } from '../PortfolioData';
import Project from './Project';

export class Portfolio extends Component {
  render() {
    return (
      <section 
        className="portfolio-section" 
        id="portfolio">
        <h2>My Work:</h2>
        <div className="projects-container">
          { projects.map(project => 
            < Project 
              key={project.id}
              {...project} 
            />)
          }
        </div>
      </section>
    )
  }
}

export default Portfolio
