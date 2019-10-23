import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Access from './pages/Access';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Access} />
    </Router>
  );
}

export default App;
