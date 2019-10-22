import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import{WrappedNormalLoginForm} from './Login';
import {SignUpForm} from './SignUp';

export default function Access(){
    return (
    <div>
    <div className="header">
      <h1>DevDesk Queue</h1>
      <h2><NavLink to="/login">Log in</NavLink></h2>
      </div>
        <Router>
            <Route path="/login" component={WrappedNormalLoginForm}/>
            <Route exact path="/" component={WrappedNormalLoginForm}/>
            <Route path="/register" component={SignUpForm}/>
        </Router>
        </div>
    )
}