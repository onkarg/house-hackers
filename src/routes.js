import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Wizard from './components/Wizard'
import Home from './components/Home'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/wizard" component={Wizard} />
        <Route path="/login" component={Login} />
    </Switch>
)