import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
import { WrappedNormalLoginForm } from './pages/Login';
import { SignUpForm } from './pages/SignUp';
import StudentTicketList from './components/TicketList/StudentTicketList';
import Access from './pages/Access';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Route
        path="/dashboard"
        component={Dashboard}
      />
      <Access />
      {/* <Route path="/" component={StudentTicketList} /> */}
    </Router>
  );
}

export default App;
