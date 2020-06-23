import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import UserRegistration from './pages/UserRegistration.js';
import EmailUserRegistration from './pages/EmailUserRegistration.js';
import LoadScreenConsumer from './pages/LoadScreenConsumer.js';
import LocationPermission from './pages/LocationPermission.js';
import HomeGettingStarted from './pages/HomeGettingStarted.js';
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/user_registration" component = {UserRegistration} />
        <Route exact path="/email_user_registration" component = {EmailUserRegistration} />
        <Route exact path="/load_screen_consumer" component = {LoadScreenConsumer} />
        <Route exact path="/location_permission" component = {LocationPermission} />
        <Route exact path="/home_getting_started" component = {HomeGettingStarted} />
      </div>
    </Router>
  );
}

export default App;
