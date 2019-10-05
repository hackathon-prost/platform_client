import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//screens
import LandingPage from '../screens/LandingPage'
import Login from '../screens/Login'
const RouterApp = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </Router>
    )
}

export default RouterApp