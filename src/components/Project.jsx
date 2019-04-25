import React, { Component } from 'react';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    }
  }

  showInfo = () => {
    this.setState( {showInfo: !this.state.showInfo} );
  }

  render() {
    return (
      <article 
        className="project-box"
        onMouseEnter={this.showInfo}
        onMouseLeave={this.showInfo}>
        <img 
          src={require(`../images/${this.props.imgURL}`)} 
          alt={this.props.title}
          className="portfolio-img" />
        { this.state.showInfo &&
            (<section className="info-container">
              <h3>{ this.props.title }</h3>
              <h4>{ this.props.description }</h4>
              <div className="info-box">
                { Array.isArray(this.props.team) 
                  ? <p className="team-box">
                      <span className="title">Team</span>
                      {this.props.team.map((person, idx) => 
                        <span key={ idx }>
                          <a href={ Object.values(person) }
                            target="_blank" 
                            rel="noopener noreferrer"  >
                            { Object.keys(person)[0].split(' ')[0] }
                          <img src={require(`../images/github-blue.svg`)} alt="Github"/>
                          </a>
                      </span>)}
                    </p>
                  : <p className="solo-project"><span>{ this.props.team }</span></p> 
                }
                <p><span className="title">Tools</span>{ this.props.toolsUsed.map((tool, idx) => 
                <span key={idx}>{ tool }</span>)}</p>
                <p><span className="title">Concepts</span>{ this.props.concepts.map((concept, idx) => 
                <span key={idx}>{ concept }</span>)}</p>
              </div>
            </section>)
        }
        <div className="icon-container">
            <a 
              href={ this.props.staticSite } 
              target="_blank" 
              rel="noopener noreferrer"  
              alt={ this.props.title }>
              <span>GH Pages</span>
              <img title="Github Pages" src={require('../images/github-blue.svg')} alt="Github Pages"/>
            </a>
            <a 
              href={ this.props.src } 
              target="_blank" rel="noopener noreferrer"  
              alt={ this.props.title }>
              <span>Source</span>
              <img title="Source" src={require('../images/source.svg')} alt="Source"/>
            </a>
           </div>
      </article>
    )
  }
}

export default Project
