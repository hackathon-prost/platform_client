import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//screens
import LandingPage from '../screens/LandingPage'
import LoginPage from '../screens/Login'
import VolunteersPage from '../screens/Volunteers'
const RouterApp = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route path='/volunteers' component={VolunteersPage}/>
            </Switch>
        </Router>
    )
}

export default RouterApp