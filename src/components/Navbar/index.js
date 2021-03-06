import React from 'react';

const Navbar = props => {

  return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Current Score: { props.currentScoreClicks() }</span>
      </nav>
     );
}
 
export default Navbar;
