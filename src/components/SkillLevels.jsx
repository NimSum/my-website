import React from 'react';
import { skillLevels } from '../PortfolioData';

export const SkillLevels = () => (
  <section className="languages">
    <ul className="skill-level-container">
      { skillLevels.map(skill => (
        <li>
          <span className="lang-img-cont">
            { skill.name }
            <img 
              src={require(`../images/${skill.imgName}`)} 
              alt={ skill.name } 
              title={ skill.name }/>
          </span>
          <div className="level">
            <div className={`${ skill.className } fill`}></div>
            <div className="bar-level"></div>
          </div>
        </li>
      ))}
    </ul>
  </section>
)