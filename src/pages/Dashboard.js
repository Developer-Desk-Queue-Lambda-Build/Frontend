import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import StudentTicketList from '../components/TicketList/StudentTicketList';
import NavBar from '../components/NavBar';
import HelperTicketList from '../components/TicketList/HelperTicketList';
import { connect } from 'react-redux';

const Dashboard = ({
  user: {
    credentials: { role }
  },
  ticket: { loading }
}) => {
  return (
    <div>
      <Sidebar />
      <NavBar />
      {role === 'student' ? <StudentTicketList /> : <HelperTicketList />}
    </div>
  );
};

export default connect(state => ({
  user: state.user,
  ticket: state.ticket
}))(Dashboard);
