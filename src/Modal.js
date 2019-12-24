import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {
  

  render () {
    return (
      <div className = 'modal'>
        <a className = 'modal Content'>
        <span className = 'close'>X</span>
          <h1 className = 'characterName'>{this.props.name}</h1>
          <a href= '#'><img src={this.props.image} alt='Character Cover'></img></a>
          <p><span>Status:</span> {this.props.status}</p>
          <p><span>Species:</span> {this.props.species}</p>
          <p><span>Gender:</span> {this.props.gender}</p>
          <p><span>Origin:</span> {this.props.origin}</p>
          <p><span>Last Location:</span> {this.props.location}</p>
        </a>
      </div>
    )
  }
}

export default Modal;
