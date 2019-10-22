import React from 'react';
import { Modal, Button, Tag } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { closeTicket } from '../redux/actions/studentActionCreators';

const TicketDetails = ({ tickets, closeTicket }) => {
  const handleCancel = () => {
    closeTicket();
  };

  return (
    <div>
      <Modal
        title={tickets.selectedTicket.title}
        visible={tickets.showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Back
          </Button>
        ]}
      >
        <p>{tickets.selectedTicket.description}</p>
        <p>
          Created:
          {moment(tickets.selectedTicket.created_at, 'YYYYMMDD').fromNow()}
        </p>
        <Tag color="red">{tickets.selectedTicket.status}</Tag>
        <Button>Own  Ticket</Button>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticket
});

const mapActionToProps = {
  closeTicket
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TicketDetails);
