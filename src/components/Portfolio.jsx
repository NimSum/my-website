import React, { Component } from 'react';
import projects from '../ProjectsData';
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
              {...project} 
              key={project.id}
            />) 
          }
        </div>
      </section>
    )
  }
}

export default Portfolio
