import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>DevDesk Queue</h1>
      <h2>Log in</h2>
      </div>
      <Login />
    </div>
  );
}

export default App;
