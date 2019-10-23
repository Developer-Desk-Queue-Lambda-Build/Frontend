import React, { useEffect } from 'react';

import { StickyContainer, Sticky } from 'react-sticky';

import { connect } from 'react-redux';
import { getAllTickets } from '../../redux/actions/studentActionCreators';

import TicketDetails from '../Modal';

import styled from 'styled-components';

import { Tabs } from 'antd';
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
        style={{ ...style, zIndex: 1, background: '#fff' }}
      />
    )}
  </Sticky>
);

const StudentTicketList = ({
  getAllTickets,
  user,
  tickets: { allTickets }
}) => {
  useEffect(() => {
    getAllTickets();
  }, []);

  return (
    <div style={{ marginLeft: '20vw', marginTop: '70px' }}>
      <StickyContainer>
        <Tabs defaultActiveKey="1" size="large" renderTabBar={renderTabBar}>
          <TabPane tab="Opened Tickets" key="1">
            <Div>
              {allTickets
                // .filter(ticket => ticket.student_id === user.credentials.id)
                .map(ticket => (
                  <Ticket data={ticket} key={ticket.id} />
                ))}
            </Div>
          </TabPane>

          <TabPane tab="Resolved Tickets" key="2">
            <Div>
              {allTickets
                .filter(ticket => ticket.status === 'complete')
                .map(ticket => (
                  <Ticket data={ticket} key={ticket.id} />
                ))}
            </Div>
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
