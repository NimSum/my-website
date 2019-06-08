import React from 'react';
import { languagesAndFrameworks, softSkills } from '../PortfolioData';

export const Skills = () => {

  const generateSoftSkills = () => (
    <section className="soft-skills-box">
      { softSkills.map(skill => (
        <article>
          <h3>{ skill.title }</h3>
          <p>{ skill.body }</p>
        </article>
      ))}
    </section>
  )





  return (
    <section className="skillset-container">
      <h3 className="skill-box-title">My Skills</h3>
      <div className="skills-container">
        { languagesAndFrameworks.map(skill => (
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
          { generateSoftSkills() }
      </div>
    </section>
  )
}