import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { createTicket } from '../../redux/actions/studentActionCreators';
import Header from './Header';
import Footer from './Footer';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
// import '../../App.css';

const DivMenu = styled.div `
  height: 100vh;
  width: 20vw;
  background: #26213A;
  position: fixed;
  box-shadow: 1px 1px 1px 1px #26213A;
  border: none;
`

const { Sider } = Layout;

export const Sidebar = ({ createTicket }) => {
  return (
    <>
      <Sider className='secondary'>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
        > 
          <DivMenu>
          <Header />
          <Profile />
          <Footer />
          </DivMenu>
        </Menu>
      </Sider>
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
