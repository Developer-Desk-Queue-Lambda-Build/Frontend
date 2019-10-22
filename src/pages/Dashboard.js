import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import NavBar from '../components/Main/NavBar';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <Main />
    </>
  );
};

export default Dashboard;
