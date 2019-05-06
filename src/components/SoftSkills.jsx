import React from 'react';
import { softSkills } from '../PortfolioData';

export const SoftSkills = () => {
  return (
    <section className="soft-skills-box">
      { softSkills.map(skill => (
        <article>
          <h3>{ skill.title }</h3>
          <p>{ skill.body }</p>
        </article>
      ))}
    </section>
  )
}
