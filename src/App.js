import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import history from "./history"
import "./App.css"

import Becoming from "./components/Becoming/Becoming";
import BecomingTOC from "./components/Becoming/BecomingTOC";
import HowToOrder from "./components/Becoming/HowToOrder";
import Quotes from "./components/Becoming/Quotes"
import SamplePages from "./components/Becoming/SamplePages"
import Contact from "./components/Contact";
import Dance from "./components/Dance";

import Feldenkrais from "./components/Feldenkrais/Home"
import History from "./components/Feldenkrais/History"
import Lessons from "./components/Feldenkrais/Lessons"
import PressQuotes from "./components/Feldenkrais/PressQuotes"
import UserQuotes from "./components/Feldenkrais/UserQuotes"
import PricePurchase from "./components/Feldenkrais/PricePurchase"
import FreeLesson from "./components/Feldenkrais/FreeLesson"
import Article from "./components/Feldenkrais/Article"

import Home from "./components/Home";
import Life from "./components/Life"
import Music from "./components/Music"
import NavBar from "./components/Navbar";
import Old from "./components/Old"
import SciFi from "./components/SciFi"
import Shopping from "./components/Shopping"
import Triathlon from "./components/Triathlon"
import TwoCents from "./components/TwoCents"


function App() {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={routerProps => <Home />} />
          <Route exact path='/Becoming.html' render={routerProps => <Becoming />} />
          <Route exact path='/BecomingTOC.html' render={routerProps => <BecomingTOC />} />
          <Route exact path='/BecomingSPages.html' render={routerProps => <SamplePages />} />
          <Route exact path='/BecomingQuotes.html' render={routerProps => <Quotes />} />
          <Route exact path='/BecomingHowToOrder.html' render={routerProps => <HowToOrder />} />
          <Route exact path='/contact' render={routerProps => <Contact />} />
          <Route exact path='/dance' render={routerProps => <Dance />} />
          <Route exact path='/Feldenkrais.html' render={routerProps => <Feldenkrais />} />
          <Route exact path='/Feldenkrais/FeldenkraisHistory.html' render={routerProps => <History />} />
          <Route exact path='/Feldenkrais/FeldenkraisLessonList.html' render={routerProps => <Lessons />} />
          <Route exact path='/Feldenkrais/FeldenkraisCDPressQuotes.html' render={routerProps => <PressQuotes />} />
          <Route exact path='/Feldenkrais/FeldenkraisCDUserQuotes.html' render={routerProps => <UserQuotes />} />
          <Route exact path='/Feldenkrais/FeldenkraisPrice.html' render={routerProps => <PricePurchase />} />
          <Route exact path='/Feldenkrais/FeldenkraisFreeLesson.html' render={routerProps => <FreeLesson />} />
          <Route exact path='/Feldenkrais/MosheFeldenkrais.html' render={routerProps => <Article />} />
          <Route exact path='/music' render={routerProps => <Music />} />
          <Route exact path='/scifi' render={routerProps => <SciFi />} />
          <Route exact path='/triathlon' render={routerProps => <Triathlon />} />
          <Route exact path='/twocents' render={routerProps => <TwoCents />} />
          <Route exact path='/old' render={routerProps => <Old />} />
          <Route exact path='/life' render={routerProps => <Life />} />
          <Route exact path='/shopping' render={routerProps => <Shopping />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
