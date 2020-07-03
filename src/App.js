import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Main from './components/main.jsx';
import About from './components/about.jsx';
import Naam from './components/naam.jsx';
import Ingredient from './components/ingredient.jsx';
import Random from './components/random.jsx';
import Saved from './components/saved.jsx';
import { Switch, Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/name" component={Naam}/>
            <Route path="/ingredient" component={Ingredient}/>
            <Route path="/random" component={Random}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
       </div>
      </Router>
   </React.Fragment>
  );
}

export default App;
