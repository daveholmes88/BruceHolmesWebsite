import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import history from "./history"
import "./App.css"

import Becoming from "./components/Becoming";
import Contact from "./components/Contact";
import Dance from "./components/Dance";
import Feldenkrais from "./components/Feldenkrais"
import Home from "./components/Home";
import Music from "./components/Music"
import NavBar from "./components/Navbar";
import SciFi from "./components/SciFi"
import Triathlon from "./components/Triathlon"
import TwoCents from "./components/TwoCents"


function App() {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={routerProps => <Home />} />
          <Route exact path='/becoming' render={routerProps => <Becoming />} />
          <Route exact path='/contact' render={routerProps => <Contact />} />
          <Route exact path='/dance' render={routerProps => <Dance />} />
          <Route exact path='/feldenkrais' render={routerProps => <Feldenkrais />} />
          <Route exact path='/music' render={routerProps => <Music />} />
          <Route exact path='/scifi' render={routerProps => <SciFi />} />
          <Route exact path='/triathlon' render={routerProps => <Triathlon />} />
          <Route exact path='/twocents' render={routerProps => <TwoCents />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
