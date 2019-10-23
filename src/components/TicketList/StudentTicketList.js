import React, { useEffect } from 'react';

import { StickyContainer, Sticky } from 'react-sticky';

import { connect } from 'react-redux';
import { getAllTickets } from '../../redux/actions/studentActionCreators';

import TicketDetails from '../Modal';

import styled from 'styled-components';

import { Tabs, Result, Icon } from 'antd';
import Ticket from './Ticket';
const { TabPane } = Tabs;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{ ...style, zIndex: 1, background: '#fff', top: '90px' }}
      />
    )}
  </Sticky>
);

const StudentTicketList = ({
  getAllTickets,
  user,
  tickets: { allTickets, searchQuery }
}) => {
  useEffect(() => {
    getAllTickets();
  }, []);

  const open =
    allTickets.filter(ticket => ticket.student_id === user.credentials.id)
      .length === 0 ? (
      <Result
        icon={<Icon type="smile" theme="twoTone" />}
        title="You have no Tickets yet"
      />
    ) : (
      <Div>
        {allTickets
          .filter(ticket => ticket.student_id === user.credentials.id)
          .filter(ticket => ticket.title.toLowerCase().includes(searchQuery))
          .map(ticket => (
            <Ticket data={ticket} key={ticket.id} />
          ))}
      </Div>
    );

  const resolved =
    allTickets.filter(ticket => ticket.student_id === user.credentials.id)
      .length === 0 ? (
      <Result
        icon={<Icon type="smile" theme="twoTone" />}
        title="You have no Tickets yet"
      />
    ) : (
      <Div>
        {allTickets
          .filter(ticket => ticket.student_id === user.credentials.id)
          .filter(ticket => ticket.status === 'complete')
          .filter(ticket => ticket.title.toLowerCase().includes(searchQuery))
          .map(ticket => (
            <Ticket data={ticket} key={ticket.id} />
          ))}
      </Div>
    );
  return (
    <div style={{ marginLeft: '20vw', marginTop: '90px' }}>
      <StickyContainer>
        <Tabs defaultActiveKey="1" size="large" renderTabBar={renderTabBar}>
          <TabPane tab="Opened Tickets" key="1">
            {open}
          </TabPane>

          <TabPane tab="Resolved Tickets" key="2">
            {resolved}
          </TabPane>
        </Tabs>
      </StickyContainer>

      <TicketDetails />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  tickets: state.ticket
});

const mapActionToProps = {
  getAllTickets
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(StudentTicketList);
