import React, { Component } from 'react';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <article>
        {/* <img src={require(`${this.props.imgURL}`)} alt={this.props.title} /> */}
        <div className="info-container">
          <h4>{ this.props.title }</h4>
          <p>{ this.props.description }</p>
          { Array.isArray(this.props.team) 
              ? this.props.team.map(person => 
                <span>
                  <a href={Object.values(person)}>
                    {Object.keys(person)}
                  </a>
                </span>)
              : <p>{this.props.team}</p> 
          }
        </div>
      </article>
    )
  }
}

export default Project
