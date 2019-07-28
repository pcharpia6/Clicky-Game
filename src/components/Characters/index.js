import React from 'react';
import CharacterCard from "../CharacterCard";

const Characters = props => {
    return (
    <div className="container justify-content-center">
      { props.characters.map(character => (
        <CharacterCard 
          key={character.id} 
          id={character.id} 
          character={character}
          handleClick={props.handleClick}
        />
      ))}
    </div>
   );
}
 
export default Characters;