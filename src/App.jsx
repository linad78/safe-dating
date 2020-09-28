import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Chats from './Chats';
import './App.css';

import Header from './Header';
//import TinderCards from './components/cards/TinderCards';
//import SwipeButtons from './components/swipes/SwipeButtons';
import LogIn from './components/login/Login';
import SignUp from './components/signup/SignUp'
import HomePage from './screens/HomePage'
import Platform from './screens/Platform'
//import NewUserPage from "./screens/Platform";
import PrivateRoute from "./components/routes/PrivateRoute";
import NewUserPage from './screens/NewUserPage';


function App() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* Tinder Cards */}
            <Route path="/" exact component={HomePage} />
            <PrivateRoute path="/platform" exact component={Platform} />
            <Route path="/xyz" exact component={NewUserPage} />

            <Route path="/chat">
              {" "}
              {/* Individual chat screen */}
              <Header backButton="/" />
            </Route>

            {/* Chats screen */}
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/LogIn">
              <Header backButton="/" />
              <LogIn />
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;