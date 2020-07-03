import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {
  };
 
  render() {
    return (
      <React.Fragment>
       <nav id="nav" className="navbar navbar-expand-lg navbar-light">
       <Link to="/">
       <a className="navbar-brand" href="#">Cocktail DB</a>
       </Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
    <Link to="/">
      <a className="btnNav nav-item nav-link active" href="#">Home</a>
    </Link>
    <Link to="/about">
      <a className="btnNav nav-item nav-link active" href="#">About Cocktail DB</a>
    </Link>
    </div>
  </div>
</nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
