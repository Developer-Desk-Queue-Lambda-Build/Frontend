import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
import { WrappedNormalLoginForm } from './pages/Login';
import { SignUpForm } from './pages/SignUp';
import StudentTicketList from './components/TicketList/StudentTicketList';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      {/* <div className="App">
        <div className="header">
          <h1>DevDesk Queue</h1>
          <h2>Log in</h2>
        </div>
        <div className="App-form">
          <WrappedNormalLoginForm />
        </div>
      </div> */}

      <Route
        path="/dashboard"
        component={Dashboard}
      />
      <Route path="/" component={StudentTicketList} />
    </Router>
  );
}

export default App;
