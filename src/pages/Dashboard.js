import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import StudentTicketList from '../components/TicketList/StudentTicketList';
import NavBar from '../components/NavBar';
import HelperTicketList from '../components/TicketList/HelperTicketList';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <StudentTicketList />

      {/* {TODO: Render one of these based on the role of the currently logged in  user} */}

      {/* <HelperTicketList /> */}
    </div>
  );
};

export default Dashboard;
