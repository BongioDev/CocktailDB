import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Naam from './naam.jsx';

class Main extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <br/>
        <div className="row">
          <div className="col-md-12">
            <h1>Cocktail DB</h1>
            <h3>Find your favorite cocktail, or explore the database for new cocktails!</h3>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-12 text-center">
          <Link to="/name">
            <a className="btn btn-outline-primary btn-sm m-1" href="#">Search by name</a>
          </Link>
          <Link to="/ingredient">
            <a className="btn btn-outline-success btn-sm m-1" href="#">Search by ingredient</a>
          </Link>
          <Link to="/random">
            <a className="btn btn-outline-warning btn-sm m-1" href="#">Random cocktail</a>
          </Link>
          {/* <Link to="/saved">
            <a className="btn btn-outline-danger btn-sm m-1" href="#">Saved cocktails</a>
          </Link> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
