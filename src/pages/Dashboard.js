import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import StudentTicketList from '../components/TicketList/StudentTicketList';
import HelperTicketList from '../components/TicketList/HelperTicketList';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      {//TODO: Render one of these based on the role of the currently logged in  user}
      <StudentTicketList />
      <HelperTicketList/>
    </>
  );
};

export default Dashboard;
