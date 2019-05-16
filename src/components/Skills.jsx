import React from 'react';
import { skillLevels } from '../PortfolioData';
import { SoftSkills } from './SoftSkills';

export const Skills = () => (
  <section className="skillset-container">
    <h3 className="skill-box-title">My Skills</h3>
    <div className="skills-container">
      { skillLevels.map(skill => (
          <span className="lang-img-cont">
            { skill.name }
            <img 
              src={require(`../images/${skill.imgName}`)} 
              alt={ skill.name } 
              title={ skill.name }/>
          </span>
      ))}
    </div>
    <div className="soft-skills">
        < SoftSkills />
    </div>
  </section>
)