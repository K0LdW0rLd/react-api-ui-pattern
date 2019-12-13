import React , {Component} from 'react';
import styled from 'styled-components';

class Characters extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p><span>Status:</span> {this.props.status}</p>
        <p><span>Species:</span> {this.props.species}</p>
        <p><span>Gender:</span> {this.props.gender}</p>
        <p><span>Origin:</span> {this.props.origin}</p>
        <p><span>Last Location:</span> {this.props.location}</p>
      </div>
    )
  }
}

export default Characters;
