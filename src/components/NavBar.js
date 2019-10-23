import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import styled from "styled-components";
import { logoutUser } from "../redux/actions/userActionCreators";

const NavCon = styled.div`
  padding: 3em;
  display: flex;
  justify-content: space-between;
  float: right;
  position: fixed;
  align-items: center;
  background: rgb(233, 233, 233);
  width: 80vw;
  height: 70px;
  margin-left: 20vw;

  input {
    font-size: 1rem;

    &:hover {
      border: 1px solid rgb(218, 48, 48);
    }
  }

  button {
    border: 1px solid rgb(218, 48, 48);
    color: rgb(218, 48, 48);
    background: transparent;
    font-size: 1.2rem;

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
      <Input
        allowClear
        icon="search"
        placeholder="Search..."
        style={{ width: 200, height: 40 }}
      />

      <Button style={{ width: 100, height: 40 }} onClick={() => logoutUser}>
        Logout
      </Button>
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
