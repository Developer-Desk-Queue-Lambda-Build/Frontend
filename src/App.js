import React from 'react';
import {} from 'react-router-dom';
import './App.css';
import {WrappedNormalLoginForm} from './components/Login';
import {SignUpForm} from './components/SignUp';

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>DevDesk Queue</h1>
      <h2>Log in</h2>
      </div>
      <div className="App-form">
      <WrappedNormalLoginForm />
      </div>
    </div>
  );
}

export default App;
