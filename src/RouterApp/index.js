import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//screens
import LandingPage from '../screens/LandingPage'
import Login from '../screens/Login'
import DashboardONG from '../screens/DashboardONG'
import VolunteersPage from '../screens/Volunteers';

const RouterApp = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/login' component={Login}/>
                <Route path='/ong' component={DashboardONG}/>
                <Route path='/volunteers' component={VolunteersPage} />
            </Switch>
        </Router>
    )
}

export default RouterApp