import React from 'react';
import './style.css';

const CharacterCard = props => {

  return (
    <div 
      className="card" 
      key={props.character.key} 
      onClick={() => props.handleClick(props.character.id)}
      >
        <div 
        className="img-container"
        >
            <img 
            alt={props.character.name} 
            src={props.character.image} />
        </div>
      </div>
  )
};
 
export default CharacterCard;