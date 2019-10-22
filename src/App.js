import React from 'react';
import './App.css';
import { WrappedNormalLoginForm } from './pages/Login';
import { SignUpForm } from './pages/SignUp';

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
