import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './Header';
import Characters from './Characters';


class App extends Component {
  constructor() {
    super ();
    this.state = {
      rickMortyData: [],
      // show: false
    };
    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.showModal.bind(this);
  }
  //Fetch the data upon load
  componentDidMount(){
    console.log('I am doing something');
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        this.setState({rickMortyData: res.results})
        console.log(this.state.rickMortyData)
        console.log(this.state.rickMortyData);
    });
  }
  // showModal(){
  //   this.setState({ show: true });
  // };

  // hideModal(){
  //   this.setState({ show: false });
  // };

  //What is going to display
  render () {
    let characterResults = this.state.rickMortyData
    const character = characterResults.map(character=>{
      return <Characters key = {character.name}
      name = {character.name}
      image = {character.image}
      status = {character.status}
      species = {character.species}
      gender = {character.gender}
      origin = {character.origin.name}
      location = {character.location.name}
      />})
    
    return (
      <div>
        <Header />
        <h1 className='App'>Rick and Morty Characters</h1>
        <div className='App'>
         {character}
        </div>
      </div>
    );
  }
}

export default App;
