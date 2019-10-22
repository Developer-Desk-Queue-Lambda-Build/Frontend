import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
import {WrappedNormalLoginForm} from './components/Login';
import {SignUpForm} from './components/SignUp';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="header">
      <h1>DevDesk Queue</h1>
      <h2><NavLink to="/login">Log in</NavLink></h2>
      </div>
        <div className="App-form">
      <Route path="/login" component={WrappedNormalLoginForm} />
      <Route path="/register" component={SignUpForm} />
      </div>
      </Router>
    </div>
  );
}

export default App;
