import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Chats from './Chats';
import './App.css';

import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import LogIn from './LogIn';
import SignUp from './SignUp';



function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route path="/chat"> {/* Individual chat screen */}
                     <Header backButton="/" />
                    </Route>

                    {/* Chats screen */}
                    <Route path="/chat">
                        <Header backButton="/" />
                        <Chats/>
                    </Route>
                    <Route path="/LogIn">
                        <Header backButton="/" />
                        <LogIn/>
                        <SignUp/>
                    </Route>

                    {/* Tinder Cards */}
                    <Route path="/">
                        <Header />
                        <TinderCards />
                        {/*  Buttons bellow tinder cards */}
                        <SwipeButtons />
                        
                    
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;