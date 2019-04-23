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
        {/* <img src={require(`${this.props.imgURL}`)} alt={this.props.title} /> */}
        <div className="info-container">
          <h4>{ this.props.title }</h4>
          <p>{ this.props.description }</p>
          { Array.isArray(this.props.team) 
              ? this.props.team.map((person, idx) => 
                <span key={idx}>
                  <a href={Object.values(person)}>
                    {Object.keys(person)}
                  </a>
                </span>)
              : <p>{this.props.team}</p> 
          }
          <p>{ this.props.toolsUsed.map(tool => <span>{tool}</span>)}</p>
          <p>{ this.props.concepts.map(concept => <span>{concept}</span>)}</p>
          <a 
            href={this.props.staticSite} 
            target="_blank" 
            rel="noopener noreferrer"  
            alt={this.props.title}>
            <img title="Github Pages" src={require('../images/github-black.svg')} alt="Github Pages"/>
          </a>
          <a 
            href={this.props.src} 
            target="_blank" rel="noopener noreferrer"  
            alt={this.props.title}>
            <img title="Source" src={require('../images/git-logo.png')} alt="Source"/>
          </a>
        </div>
      </article>
    )
  }
}

export default Project
