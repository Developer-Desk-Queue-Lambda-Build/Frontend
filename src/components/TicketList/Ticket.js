import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { viewTicket } from '../../redux/actions/studentActionCreators';

import styled from 'styled-components';
import { Tag } from 'antd';

const Div = styled.div`
  width: 250px;
  height: 400px;
  background: white;
  /* border: 1px solid grey; */
  border-radius: 5px;
  box-shadow: 1px 1px 4px -1px #464d4f;
  transition: 0.3s transform;
  cursor: pointer;
  margin: 20px;
  padding: 20px;
  @media (max-width: 600px) {
  width: 300px;
  height: 300px;
  }

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
      <p>
        {data.description.length > 30
          ? `${data.description.substring(0, 30)} ...`
          : data.description}
      </p>
      <p>
        Created:{' '}
        {moment(moment(data.created_at, 'YYYYMMDD, h:mm:ss a'))
          .add(1, 'hours')
          .fromNow()}
      </p>
      <Tag color="red" style={{marginTop:'100px'}}>{data.status}</Tag>
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
