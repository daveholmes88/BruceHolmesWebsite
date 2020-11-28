import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import history from "./history"
import "./App.css"

import NavBar from "./components/Navbar";
import Home from "./components/Home";

import JoinMailList from "./components/Contact/JoinMailList";
import ContactBruce from "./components/Contact/ContactBruce";

import Becoming from "./components/Becoming/Becoming";
import BecomingTOC from "./components/Becoming/BecomingTOC";
import HowToOrder from "./components/Becoming/HowToOrder";
import Quotes from "./components/Becoming/Quotes";
import SamplePages from "./components/Becoming/SamplePages";

import SocialDance from "./components/Dance/SocialDance";
import Ballroom from "./components/Dance/Ballroom";
import Barn from "./components/Dance/Barn";
import EnglishCountry from "./components/Dance/EnglishCountry";
import Folk from "./components/Dance/Folk";
import Performance from "./components/Dance/Performance";
import ScottishCountry from "./components/Dance/ScottishCountry";
import Square from "./components/Dance/Square";
import Try from "./components/Dance/Try";

import MovementQuotes from "./components/Movement/Quotes";
import Aikido from "./components/Movement/Aikido"
import Juggling from "./components/Movement/Juggling"

import MarathonSong from "./components/Triathlon/MarathonSong";
import TriAthleteNutrition from "./components/Triathlon/TriAthleteNutrition";
import TriBike from "./components/Triathlon/TriBike";
import TriCramps from "./components/Triathlon/TriCramps";
import TriGadgets from "./components/Triathlon/TriGadgets";
import TriGear from "./components/Triathlon/TriGear";
import TriKnees from "./components/Triathlon/TriKnees";
import TriLearning from "./components/Triathlon/TriLearning";
import TriLengths from "./components/Triathlon/TriLengths";
import TriNutrition from "./components/Triathlon/TriNutrition";
import TriOpenWater from "./components/Triathlon/TriOpenWater";
import TriPicksPans from "./components/Triathlon/TriPicksPans";
import TriRaceDay from "./components/Triathlon/TriRaceDay";
import TriRaceNutrition from "./components/Triathlon/TriRaceNutrition";
import TriRules from "./components/Triathlon/TriRules";
import TriRun from "./components/Triathlon/TriRun";
import TriShoes from "./components/Triathlon/TriShoes";
import TriStrength from "./components/Triathlon/TriStrength";
import TriStretching from "./components/Triathlon/TriStretching";
import TriSuits from "./components/Triathlon/TriSuits";
import TriSwim from "./components/Triathlon/TriSwim";
import TriTraining from "./components/Triathlon/TriTraining";
import TriWarmup from "./components/Triathlon/TriWarmup";
import TriWarning from "./components/Triathlon/TriWarning";
import TriWeightLoss from "./components/Triathlon/TriWeightLoss";
import TriWetsuits from "./components/Triathlon/TriWetsuits";
import TriWhy from "./components/Triathlon/TriWhy";
import TriYou from "./components/Triathlon/TriYou";

import Feldenkrais from "./components/Feldenkrais/Home"
import History from "./components/Feldenkrais/History"
import Lessons from "./components/Feldenkrais/Lessons"
import PressQuotes from "./components/Feldenkrais/PressQuotes"
import UserQuotes from "./components/Feldenkrais/UserQuotes"
import PricePurchase from "./components/Feldenkrais/PricePurchase"
import FreeLesson from "./components/Feldenkrais/FreeLesson"
import Article from "./components/Feldenkrais/Article"

import Music from "./components/Music/Music"
import MusicPhoto from "./components/Music/MusicPhoto"
import PressBio from "./components/Music/PressBio"
import Radio from "./components/Music/Radio"
import Life from "./components/Music/Life/Life"
import StoryOf from "./components/Music/Life/StoryOf"
import ConcertPhotos from "./components/Music/Life/ConcertPhotos"
import WesternSprings from "./components/Music/Life/WesternSprings"
import EvanstonReview from "./components/Music/Life/EvanstonReview"
import Old from "./components/Music/Old/Old"
import RickLibrarian from "./components/Music/Old/RickLibrarian"
import ChicagoTribune from "./components/Music/Old/ChicagoTribune"


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

          <Route exact path='/Touch/TouchMailList.html' render={routerProps => <JoinMailList />} />
          <Route exact path='/Touch/TouchContact.html' render={routerProps => <ContactBruce />} />

          <Route exact path='/Dance/DanceSocial.html' render={routerProps => <SocialDance />} />
          <Route exact path='/Dance/DanceBallroom.html' render={routerProps => <Ballroom />} />
          <Route exact path='/Dance/DanceBarn.html' render={routerProps => <Barn />} />
          <Route exact path='/Dance/DanceECD.html' render={routerProps => <EnglishCountry />} />
          <Route exact path='/Dance/DanceFolk.html' render={routerProps => <Folk />} />
          <Route exact path='/Dance/DancePerformance.html' render={routerProps => <Performance />} />
          <Route exact path='/Dance/DanceScottish.html' render={routerProps => <ScottishCountry />} />
          <Route exact path='/Dance/DanceSquare.html' render={routerProps => <Square />} />
          <Route exact path='/Dance/DanceWhich.html' render={routerProps => <Try />} />

          <Route exact path='/Feldenkrais.html' render={routerProps => <Feldenkrais />} />
          <Route exact path='/Feldenkrais/FeldenkraisHistory.html' render={routerProps => <History />} />
          <Route exact path='/Feldenkrais/FeldenkraisLessonList.html' render={routerProps => <Lessons />} />
          <Route exact path='/Feldenkrais/FeldenkraisCDPressQuotes.html' render={routerProps => <PressQuotes />} />
          <Route exact path='/Feldenkrais/FeldenkraisCDUserQuotes.html' render={routerProps => <UserQuotes />} />
          <Route exact path='/Feldenkrais/FeldenkraisPrice.html' render={routerProps => <PricePurchase />} />
          <Route exact path='/Feldenkrais/FeldenkraisFreeLesson.html' render={routerProps => <FreeLesson />} />
          <Route exact path='/Feldenkrais/MosheFeldenkrais.html' render={routerProps => <Article />} />

          <Route exact path='/Movement/Movement.html' render={routerProps => <MovementQuotes />} />
          <Route exact path='/Movement/Aikido.html' render={routerProps => <Aikido />} />
          <Route exact path='/Movement/Juggling.html' render={routerProps => <Juggling />} />

          <Route exact path='/Music/Music.html' render={routerProps => <Music />} />
          <Route exact path='/Music/MusicPhotos.html' render={routerProps => <MusicPhoto />} />
          <Route exact path='/Music/PressBio.html' render={routerProps => <PressBio />} />
          <Route exact path='/Music/MusicRadio.html' render={routerProps => <Radio />} />
          <Route exact path='/Music/LifeMp3Player/MusicLife.html' render={routerProps => <Life />} />
          <Route exact path='/Music/MusicLifeStory.html' render={routerProps => <StoryOf />} />
          <Route exact path='/Music/MusicConcert2005.html' render={routerProps => <ConcertPhotos />} />
          <Route exact path='/Music/ReviewWesternSprings.html' render={routerProps => <WesternSprings />} />
          <Route exact path='/Music/ReviewEvanston.html' render={routerProps => <EvanstonReview />} />
          <Route exact path='/Music/OKRMp3Player/MusicOKR.html' render={routerProps => <Old />} />
          <Route exact path='/Music/ReviewChiTribune.html' render={routerProps => <ChicagoTribune />} />
          <Route exact path='/Music/ReviewRickLibrarian.html' render={routerProps => <RickLibrarian />} />

          <Route exact path='/SciFi/Anvil.html' render={routerProps => <AnvilHome />} />
          <Route exact path='/SciFi/AnvilQuotes.html' render={routerProps => <AuthorQuotes />} />
          <Route exact path='/SciFi/AnvilFanQuotes.html' render={routerProps => <FanQuotes />} />
          <Route exact path='/SciFi/AnvilChap1.html' render={routerProps => <FirstChapter />} />
          <Route exact path='/SciFi/Switch.html' render={routerProps => <SwitchTime />} />

          <Route exact path='/Triathlon/Marathon/MarathonSong.html' render={routerProps => <MarathonSong />} />
          <Route exact path='/Triathlon/TriAthleteNutrition.html' render={routerProps => <TriAthleteNutrition />} />
          <Route exact path='/Triathlon/TriBike.html' render={routerProps => <TriBike />} />
          <Route exact path='/Triathlon/TriCramps.html' render={routerProps => <TriCramps />} />
          <Route exact path='/Triathlon/TriGadgets.html' render={routerProps => <TriGadgets />} />
          <Route exact path='/Triathlon/TriGear.html' render={routerProps => <TriGear />} />
          <Route exact path='/Triathlon/TriKnees.html' render={routerProps => <TriKnees />} />
          <Route exact path='/Triathlon/TriLearning.html' render={routerProps => <TriLearning />} />
          <Route exact path='/Triathlon/TriLengths.html' render={routerProps => <TriLengths />} />
          <Route exact path='/Triathlon/TriNutrition.html' render={routerProps => <TriNutrition />} />
          <Route exact path='/Triathlon/TriOpenWater.html' render={routerProps => <TriOpenWater />} />
          <Route exact path='/Triathlon/TriPicksPans.html' render={routerProps => <TriPicksPans />} />
          <Route exact path='/Triathlon/TriRaceDay.html' render={routerProps => <TriRaceDay />} />
          <Route exact path='/Triathlon/TriRaceNutrition.html' render={routerProps => <TriRaceNutrition />} />
          <Route exact path='/Triathlon/TriRules.html' render={routerProps => <TriRules />} />
          <Route exact path='/Triathlon/TriRun.html' render={routerProps => <TriRun />} />
          <Route exact path='/Triathlon/TriShoes.html' render={routerProps => <TriShoes />} />
          <Route exact path='/Triathlon/TriStrength.html' render={routerProps => <TriStrength />} />
          <Route exact path='/Triathlon/TriStretching.html' render={routerProps => <TriStretching />} />
          <Route exact path='/Triathlon/TriSuits.html' render={routerProps => <TriSuits />} />
          <Route exact path='/Triathlon/TriSwim.html' render={routerProps => <TriSwim />} />
          <Route exact path='/Triathlon/TriTraining.html' render={routerProps => <TriTraining />} />
          <Route exact path='/Triathlon/TriWarmup.html' render={routerProps => <TriWarmup />} />
          <Route exact path='/Triathlon/TriWarning.html' render={routerProps => <TriWarning />} />
          <Route exact path='/Triathlon/TriWeightLoss.html' render={routerProps => <TriWeightLoss />} />
          <Route exact path='/Triathlon/TriWet.html' render={routerProps => <TriWetsuits />} />
          <Route exact path='/Triathlon/TriWhy.html' render={routerProps => <TriWhy />} />
          <Route exact path='/Triathlon/TriYou.html' render={routerProps => <TriYou />} />

          <Route exact path='/twocents' render={routerProps => <TwoCents />} />

          <Route exact path='/shopping' render={routerProps => <Shopping />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
