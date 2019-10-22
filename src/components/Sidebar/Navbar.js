import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActionCreators';

const Navbar = ({ logoutUser }) => {
  return <div></div>;
};

const mapStateToProps = state => state.user;
const mapActionToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Navbar);
