import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { WrappedNormalLoginForm } from './pages/Login';
import { SignUpForm } from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>DevDesk Queue</h1>
          <h2>Log in</h2>
        </div>
        <div className="App-form">
          <WrappedNormalLoginForm />
        </div>
      </div>

      <Route
        path="/dashboard"
        component={Dashboard}
      />
    </Router>
  );
}

export default App;
