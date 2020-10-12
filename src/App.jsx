import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chats from './Chats';
import ChatScreen from'./ChatScreen';

import './App.css';
//import Chat from './Chat';
import Header from './Header';
import HomePage from './screens/HomePage'
import Platform from './screens/Platform'
import PrivateRoute from "./components/routes/PrivateRoute";
import NewUserPage from './screens/NewUserPage';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <PrivateRoute path="/platform" exact component={Platform} />
                    <Route path="/xyz" exact component={NewUserPage} />

                    {/* Chats screen */}
                    <Route path="/chat:person">
                        <Header backButton="/chat" />
                        <ChatScreen/>
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/" />
                        <Chats />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;