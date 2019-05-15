import React from 'react';
import { skillLevels } from '../PortfolioData';

export const SkillLevels = () => (
  <section className="languages-skills">
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
        <h2>asdfasdf</h2>
    </div>
  </section>
)