import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import styled from "styled-components";

import { logoutUser } from "../../redux/actions/userActionCreators";

const NavCon = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;

  .topCon {
    display: flex;
    flex-direction: space-between;

    button {
      width: 5rem;
      border: 1px solid rgb(218, 48, 48);
      color: rgb(218, 48, 48);
      background: transparent;
    }
  }

  .bottomCon {
    display: flex;
    flex-direction: space-between;
  }
`;

const Navbar = ({ logoutUser }) => {
  return (
    <NavCon>
      <div className="topCon">
        <Input icon="search" placeholder="Search..." style={{ width: 200 }} />

        <Button>Logout</Button>
      </div>

      <div className="bottomCon">
        <NavLink to="/open-ticket">Open Tickets</NavLink>
        <NavLink to="/resolved-ticket">Resolved Tickets</NavLink>
      </div>
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
