import './App.css';
import React from "react";
import '@fortawesome/fontawesome-free'
import Login from "../Login/Login";
import ChatApp from "../chatApp/ChatApp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "../SignUp/SignUp";




function App() {
    return (
        <Router>
            <Switch>
                <div>
                    <Route exact path={"/"} component={Login}/>
                    <Route exact path="/chat" component={ChatApp}/>
                    <Route path={"/signup"} component={SignUp} />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
