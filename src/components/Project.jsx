import React, { Component } from 'react';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <article className="project-box">
        <img 
          src={require(`../images/git-commander.jpg`)} 
          alt={this.props.title}
          className="portfolio-img" />
        <section className="info-container">
          <h3>{ this.props.title }</h3>
          <h4>{ this.props.description }</h4>
          <div className="info-box">
            { Array.isArray(this.props.team) 
              ? <p className="team-box">
                  <span span className="title">Team:</span>
                  {this.props.team.map((person, idx) => 
                    <span key={ idx }>
                      <a href={ Object.values(person) }>
                        { Object.keys(person) }
                      </a>
                  </span>)}
                </p>
              : <p className="solo-project">{ this.props.team }</p> 
            }
            <p><span className="title">Tools:</span>{ this.props.toolsUsed.map(tool => <span>{ tool }</span>)}</p>
            <p><span className="title">Concepts:</span>{ this.props.concepts.map(concept => <span>{ concept }</span>)}</p>
          </div>
        </section>
        <div className="icon-container">
            <a 
              href={ this.props.staticSite } 
              target="_blank" 
              rel="noopener noreferrer"  
              alt={ this.props.title }>
              <span>GH Pages</span>
              <img title="Github Pages" src={require('../images/github-black.svg')} alt="Github Pages"/>
            </a>
            <a 
              href={ this.props.src } 
              target="_blank" rel="noopener noreferrer"  
              alt={ this.props.title }>
              <span>Source</span>
              <img title="Source" src={require('../images/git-logo.png')} alt="Source"/>
            </a>
           </div>
      </article>
    )
  }
}

export default Project
