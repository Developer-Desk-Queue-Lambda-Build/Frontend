import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { createTicket } from '../../redux/actions/studentActionCreators';
import Header from './Header';
import Footer from './Footer';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export const Sidebar = ({ createTicket }) => {
  return (
    <div>
      <Sider>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            height: '100vh',
            width: '20vw',
            background: '#26213A',
            position: 'fixed',
            boxShadow: '1px 1px 1px 1px #26213A',
            border: 'none'
          }}
        >
          <Header />
          <Profile />
          <Footer />
        </Menu>
      </Sider>
    </div>
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
