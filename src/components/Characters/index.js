import React, { Component } from 'react';
import CharacterCard from "../CharacterCard";

class Characters extends Component {
  

  render() { 

    return ( 
      <div>
        { this.props.characters.map(character => (
          <CharacterCard 
            key={character.id} 
            id={character.id} 
            character={character}
            handleClick={this.props.handleClick}
          />
        ))}
      </div>
     );
  }
}
 
export default Characters;