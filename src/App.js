import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import './App.css';
import PageA from './pageA.js';
import PageB from './pageB.js';


function App() {

  return (
    <Router>
      
        <div className='navbar-container'>
          <Link to='/pageA' className="pageA-container">
            Crypto Spot Market
          </Link>
          <Link to='/pageB' className="pageB-container">
            Generate ethereum keypair
          </Link>
        </div>
        <Switch>
          <Route exact path='/pageA' component={PageA} />
          <Route exact path='/pageB' component={PageB} />
        </Switch>
      
    </Router>
  );
}

export default App;
