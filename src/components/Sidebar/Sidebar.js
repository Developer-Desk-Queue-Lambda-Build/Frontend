import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { createTicket } from '../../redux/actions/studentActionCreators';
import { Button } from 'antd';
import Header from './Header';
import Footer from './Footer';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;


export const Sidebar = ({ createTicket }) => {
  return (
    <>
      <Sider >
          <div className="logo"/>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{height: '100vh', width: '50vh', background: '#26213A'}}>
          <Header />
          <Profile />
          <Footer />
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
