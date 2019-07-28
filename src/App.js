import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';
import Characters from "./components/Characters";
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import characters from "./characters.json";

function shuffle(characters) {
  var currentIndex = characters.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = characters[currentIndex];
    characters[currentIndex] = characters[randomIndex];
    characters[randomIndex] = temporaryValue;
  }

  return characters;
}

class App extends Component {
  
   state = { 
    characters: characters,
    clicked: [],
    currentScore: 0
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      //Looks up the character ID in the state.clicked, if it's not present then it continues
      // Cannot push into a state array, so concat cleanly makes a new array to play with
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.handleShuffle();
    } else {
      // User loses
      this.handleGameOver();
    }
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffle(this.state.characters);
    this.setState({
      characters: shuffledCharacters
    })
  }

  handleGameOver = () => {
    this.handleReset();
    alert("You Lose!")
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      clicked: [],
      currentScore: 0,
    });
  }

  handleCurrentScore = () => {
    if (this.state.clicked.length === 12) {
      alert("You Win!");
      this.handleReset();
    }
    return this.state.clicked.length;
    
  }

  render() { 
    return (
      <React.Fragment>
        <Navbar 
        currentScoreClicks={ this.handleCurrentScore }
        />
        <Wrapper>
          <Title>Clicky Game!</Title>
          <Instructions></Instructions>
          <Characters 
          characters={this.state.characters}
          handleClick={this.handleClick}/>
        </Wrapper>
      </React.Fragment>
      
     );
  };
};
 
export default App;

