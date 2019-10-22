import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
import { WrappedNormalLoginForm } from './pages/Login';
import { SignUpForm } from './pages/SignUp';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
    <Router>
      <Route exact path="/login" component={WrappedNormalLoginForm} />
      <Route exact path="/" component={WrappedNormalLoginForm} />
      <Route path="/register" component={SignUpForm} />
      <Route path="/sidebar" component={Sidebar}/>
      </Router>
    </div>
  );
}

export default App;
