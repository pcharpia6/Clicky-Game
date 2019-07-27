import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';
import Characters from "./components/Characters";
import Navbar from './components/Navbar';


class App extends Component {
  
   state = { 
    characters: [
      {
        id: 1,
        name: "SpongeBob",
        image: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
        clicked: false
      },
      {
        id: 2,
        name: "Mr. Krabs",
        image: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
        clicked: false
      },
      {
        id: 3,
        name: "Squidward",
        image: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
        clicked: false
      },
      {
        id: 4,
        name: "Dexter",
        image: "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
        clicked: false
      },
      {
        id: 5,
        name: "Courage",
        image: "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
        clicked: false
      },
      {
        id: 6,
        name: "Doug Funnie",
        image: "https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",
        clicked: false
      },
      {
        id: 7,
        name: "Bugs Bunny",
        image: "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
        clicked: false
      },
      {
        id: 8,
        name: "Johnny Bravo",
        image: "http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",
        clicked: false
      },
      {
        id: 9,
        name: "Tommy Pickles",
        image: "https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",
        clicked: false
      },
      {
        id: 10,
        name: "Rocko",
        image: "http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",
        clicked: false
      },
      {
        id: 11,
        name: "Captain Planet",
        image: "http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",
        clicked: false
      },
      {
        id: 12,
        name: "Ickis",
        image: "http://static.tvtropes.org/pmwiki/pub/images/ickis.png",
        clicked: false
      }
    ]
  };

  handleClick = character => {
    const characters = [...this.state.characters];
    const index = characters.indexOf(character);
    characters[index] = { ...character };
    if (characters[index].clicked === false) { 
      characters[index].clicked = true;
      this.setState({ characters });
    } else {
      // handleGameOver()
    }
  };


  handleGameOver = () => {

  };

  render() { 
    return (
      <React.Fragment>
        <Navbar 
        currentScoreClicks={this.state.characters.filter(c => c.clicked === true).length}
        highScoreClicks
        />
          
          {/* TODO enter function to return number of correctly guessed characters */}
        <Wrapper>
          <Title>Clicky Game!</Title>
          <Characters 
          characters={this.state.characters}
          handleClick={this.handleClick}/>
        </Wrapper>
      </React.Fragment>
      
     );
  };
};
 
export default App;

