import React from 'react';
import './App.css';
import { WrappedNormalLoginForm } from './pages/Login';
import { SignUpForm } from './pages/SignUp';
import { Route } from 'react-router-dom';
import StudentTicketList from './components/TicketList/StudentTicketList';

function App() {
  return (
    <div className="App">
      {/* <div className="header">
        <h1>DevDesk Queue</h1>
        <h2>Log in</h2>
      </div>
      <div className="App-form">
        <WrappedNormalLoginForm />
      </div> */}

      <Route path="/" component={StudentTicketList} />
    </div>
  );
}

export default App;
