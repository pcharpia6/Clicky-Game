import React, { Component } from 'react';
import './style.css';

class CharacterCard extends Component {

  render() {
    
  console.log(this.props.character);
    return ( 
      <div className="card">
        <div className="img-container" 
          onClick={() => this.props.handleClick(this.props.character)}>
            <img alt={this.props.character.name} src={this.props.character.image} />
        </div>
      </div>
    );
  };
};
 
export default CharacterCard;