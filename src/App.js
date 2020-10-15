import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import history from "./history"

import Home from "./components/Home";
import NavBar from "./components/Navbar"


function App() {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={routerProps => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
