import React, { Component } from 'react';

class Navbar extends Component {



  render() { 
    console.log(this.props);
    return ( 
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{this.props.currentScoreClicks}</span>
        <span className="navbar-brand mb-12 h1">{this.props.children}</span>
      </nav>
     );
  }
}
 
export default Navbar;
