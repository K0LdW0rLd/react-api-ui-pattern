import React , {Component} from 'react';
import styled from 'styled-components';
import './Modal.css'

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

  modalDisplay(evt){
    evt.preventDefault();
    let modalDisplay = this.props.className === 'modal'
    console.log(evt.target.className)
    modalDisplay.style.display = "block";
  }

  render () {
    return (
      <Div>
        <div>
        <a href= '#' onClick={(e) => this.modalDisplay(e)}>
          <h1>{this.props.name}</h1>
          <img src={this.props.image} alt='Character Cover'></img>
        </a>
        </div>
        <div className = 'modal'>
          <div className = 'modal Content'>
          <span className = 'close'>X</span>
            <h1 className = 'characterName'>{this.props.name}</h1>
            <a href= '#'><img src={this.props.image} alt='Character Cover'></img></a>
            <p><span>Status:</span> {this.props.status}</p>
            <p><span>Species:</span> {this.props.species}</p>
            <p><span>Gender:</span> {this.props.gender}</p>
            <p><span>Origin:</span> {this.props.origin}</p>
            <p><span>Last Location:</span> {this.props.location}</p>
          </div>
        </div>
      </Div>
    )
  }
}

export default Characters;
