import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { createTicket } from '../../redux/actions/studentActionCreators';
import { Button } from 'antd';
import Header from './Header';
import Footer from './Footer';

const Sidebar = ({ createTicket }) => {
  return (
    <>
      <Header />
      <Profile />
      <Button>Create Ticket</Button>
      <Footer />
    </>
  );
};

const mapStateToProps = state => state.user;
const mapActionToProps = {
  createTicket
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Sidebar);
