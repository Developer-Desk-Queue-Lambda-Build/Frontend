import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import styled from "styled-components";

import { logoutUser } from "../../redux/actions/userActionCreators";

const NavCon = styled.div`
  margin: 2em;
  padding: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(233, 233, 233);
  width: 100vw;
  height: 70px;

  button {
    width: 5rem;
    border: 1px solid rgb(218, 48, 48);
    color: rgb(218, 48, 48);
    background: transparent;

    &:hover {
      border: 1px solid rgb(218, 48, 48);
      color: white;
      background: rgb(218, 48, 48);
    }
  }
`;

const Navbar = ({ logoutUser }) => {
  return (
    <NavCon>
      <Input icon="search" placeholder="Search..." style={{ width: 200 }} />

      <Button>Logout</Button>
    </NavCon>
  );
};

const mapStateToProps = state => state.user;
const mapActionToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Navbar);
