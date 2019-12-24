import React , {Component} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Div = styled.div`
  background-color: antiquewhite;
  color: coral;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
  width: 350px;
  border: black 2px solid;
  margin: 5px;
`;

const img = styled.img`
  border: 2px black solid;
`;

class Characters extends Component {
  constructor() {
    super ();
    this.state = {
    show: false
    }
  }

  render () {
    const {show} = this.state;
    return (
      <Div>
        <div>
        <a href= '#' onClick={() => this.setState({ show: !show })}>
          <h1>{this.props.name}</h1>
          <img src={this.props.image} alt='Character Cover'></img>
        </a>
        </div>
        {show ?  (<a href = '#' onClick={() => this.setState({ show: !show })}>
          <Modal 
          name = {this.props.name}
          image = {this.props.image}
          status = {this.props.status}
          species = {this.props.species}
          gender = {this.props.gender}
          origin = {this.props.origin.name}
          location = {this.props.location.name}
          /></a>
        ) : null }
      </Div>
    )
  }
}

export default Characters;
