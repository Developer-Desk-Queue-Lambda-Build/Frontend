import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { viewTicket } from '../../redux/actions/studentActionCreators';

import styled from 'styled-components';
import { Tag } from 'antd';

const Div = styled.div`
  width: 200px;
  height: 250px;
  background: white;
  border: 1px solid grey;
  border-radius: 5px;
  transition: 0.3s transform;
  cursor: pointer;
  margin: 20px;
  padding: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Ticket = ({
  data,
  viewTicket,
  user: {
    credentials: { id, role }
  }
}) => {
  const handleClick = () => {
    viewTicket(data.id);
  };

  return (
    <Div onClick={handleClick}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Created: {moment(data.created_at, 'YYYYMMDD').fromNow()}</p>
      <Tag color="red">{data.status}</Tag>
      {role === 'helper' && data.helper_id === id && (
        <Tag color="black">Owned</Tag>
      )}
    </Div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  tickets: state.ticket
});

const mapActionToProps = {
  viewTicket
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Ticket);
