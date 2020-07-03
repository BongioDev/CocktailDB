import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Main from './components/main.jsx';
import { Switch, Route} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import Naam from './components/naam.jsx';


function App() {
  return (
   <React.Fragment>
      <Router>
        <Main />
        <div className="container">
          <Switch>
          <Route path="/name" component={Naam}/>
          </Switch>
       </div>
      </Router>
   </React.Fragment>
  );
}

export default App;
