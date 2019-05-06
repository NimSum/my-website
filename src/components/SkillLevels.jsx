import React from 'react';

export const SkillLevels = () => (
  <section className="languages">
    <ul className="skill-level-container">
      <li>
        <span className="lang-img-cont">React<img src={require('../images/react.svg')} alt="React" title="React"/></span>
        <div className="level"><div className="react fill">
          </div><div className="bar-level"></div></div>
      </li>
      <li>
        <span className="lang-img-cont">SASS<img src={require('../images/sass.svg')} alt="SASS" title="SASS"/></span>
        <div className="level"><div className="sass fill">
          </div><div className="bar-level"></div></div>
      </li>
      <li>
        <span className="lang-img-cont">CSS<img src={require('../images/css.svg')} alt="CSS" title="CSS"/></span>
        <div className="level"><div className="css fill">
          </div><div className="bar-level"></div></div>
      </li>
      <li>
        <span className="lang-img-cont">HTML5<img src={require('../images/html.svg')} alt="HTML" title="HTML"/></span>
        <div className="level"><div className="html fill">
          </div><div className="bar-level"></div></div>
      </li>
      <li>
        <span className="lang-img-cont">Javascript<img src={require('../images/js.svg')} alt="Javascript" title="Javscript"/></span>
        <div className="level"><div className="javascript fill">
          </div><div className="bar-level"></div></div>
      </li>
      <li>
        <span className="lang-img-cont">Redux<img src={require('../images/redux.svg')} alt="Redux" title="Redux"/></span>
        <div className="level"><div className="redux fill">
          </div><div className="bar-level"></div></div>
      </li>
      <li>
        <span className="lang-img-cont">Node.js<img src={require('../images/node.svg')} alt="Node JS" title="Node JS"/></span>
        <div className="level"><div className="node fill">
          </div><div className="bar-level"></div></div>
      </li>
    </ul>
  </section>
)