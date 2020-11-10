import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import history from "./history"
import "./App.css"

import NavBar from "./components/Navbar";
import Home from "./components/Home";

import Contact from "./components/Contact";

import Becoming from "./components/Becoming/Becoming";
import BecomingTOC from "./components/Becoming/BecomingTOC";
import HowToOrder from "./components/Becoming/HowToOrder";
import Quotes from "./components/Becoming/Quotes";
import SamplePages from "./components/Becoming/SamplePages";

import Dance from "./components/Dance";
import Triathlon from "./components/Triathlon"

import Feldenkrais from "./components/Feldenkrais/Home"
import History from "./components/Feldenkrais/History"
import Lessons from "./components/Feldenkrais/Lessons"
import PressQuotes from "./components/Feldenkrais/PressQuotes"
import UserQuotes from "./components/Feldenkrais/UserQuotes"
import PricePurchase from "./components/Feldenkrais/PricePurchase"
import FreeLesson from "./components/Feldenkrais/FreeLesson"
import Article from "./components/Feldenkrais/Article"

import Music from "./components/Music"
import Old from "./components/Old"
import Life from "./components/Life"

import AnvilHome from "./components/SciFi/AnvilHome"
import AuthorQuotes from "./components/SciFi/AuthorQuotes"
import FanQuotes from "./components/SciFi/FanQuotes"
import FirstChapter from "./components/SciFi/FirstChapter"
import SwitchTime from "./components/SciFi/SwitchTime"

import Shopping from "./components/Shopping"

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
          <Route exact path='/Music/Music.html' render={routerProps => <Music />} />
          <Route exact path='/Music/OKRMp3Player/MusicOKR.html' render={routerProps => <Old />} />
          <Route exact path='/Music/LifeMp3Player/MusicLife.html' render={routerProps => <Life />} />
          <Route exact path='/SciFi/Anvil.html' render={routerProps => <AnvilHome />} />
          <Route exact path='/SciFi/AnvilQuotes.html' render={routerProps => <AuthorQuotes />} />
          <Route exact path='/SciFi/AnvilFanQuotes.html' render={routerProps => <FanQuotes />} />
          <Route exact path='/SciFi/AnvilChap1.html' render={routerProps => <FirstChapter />} />
          <Route exact path='/SciFi/Switch.html' render={routerProps => <SwitchTime />} />
          <Route exact path='/triathlon' render={routerProps => <Triathlon />} />
          <Route exact path='/twocents' render={routerProps => <TwoCents />} />
          <Route exact path='/shopping' render={routerProps => <Shopping />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
