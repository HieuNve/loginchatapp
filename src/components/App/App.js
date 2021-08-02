import './App.css';
import React, {useState} from "react";
import '@fortawesome/fontawesome-free'
import Login from "../Login/Login";
import ChatApp from "../chatApp/ChatApp";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <div>
                    <Route exact path={"/"} component={Login}/>
                    <Route exact path="/:string" component={ChatApp}/>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
