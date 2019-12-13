import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './Header';
import Characters from './Characters';

class App extends Component {
  constructor() {
    super ()
    this.state = {
      rickMortyData: []
    }
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
    })
  }

  //What is going to display
  render () {
    let characterResults = this.state.rickMortyData
    const characters = characterResults.map(character=>
      {return <Characters key = {character.name} name = {character.name}
      />})
    const status = characterResults.map(character=>
      {return <Characters key = {character.status} status = {character.status}
      />})
    return (
      <div>
        <Header />
        <h1>Rick and Morty Characters</h1>
        <ul>
          {characters}
        </ul>
      </div>
    );
  }
}

export default App;
