import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../redux/actions/userActionCreators';
import { searchQueryChange } from '../redux/actions/studentActionCreators';

const NavCon = styled.div`
  padding: 3em;
  display: flex;
  justify-content: space-between;
  float: right;
  position: fixed;
  align-items: center;
  background: rgba(233, 233, 233, 0.1);
  width: 80vw;
  height: 70px;
  margin-left: 20vw;
  z-index: 1;
  font-size: 1rem;
  background: #26213a;

  button {
    border: 1px solid rgb(218, 48, 48);
    color: rgb(218, 48, 48);
    background: transparent;
    font-size: 1.2rem;
    margin-right: 30px;

    &:hover {
      border: 1px solid rgb(218, 48, 48);
      color: white;
      background: rgb(218, 48, 48);
    }
  }
`;

const Navbar = ({ logoutUser, history, searchQueryChange }) => {
  return (
    <NavCon>
      <Input
        allowClear
        icon="search"
        placeholder="Search..."
        style={{ width: 200, height: 40 }}
        onChange={e => searchQueryChange(e.target.value)}
      />

      <Button
        style={{ width: 100, height: 40 }}
        onClick={() => logoutUser(history)}
      >
        Logout
      </Button>
    </NavCon>
  );
};

const mapStateToProps = state => state.user;
const mapActionToProps = {
  logoutUser,
  searchQueryChange
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionToProps
  )(Navbar)
);
