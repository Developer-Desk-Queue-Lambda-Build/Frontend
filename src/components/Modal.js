import React from 'react';
import { Modal, Button, Tag, notification, Select } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { closeTicket } from '../redux/actions/studentActionCreators';
import {
  changeTicketOwnership,
  changeTicketStatus
} from '../redux/actions/helperActionCreators';

const { Option } = Select;
const TicketDetails = ({
  tickets,
  closeTicket,
  user: {
    credentials: { role, id }
  },
  changeTicketOwnership,
  changeTicketStatus
}) => {
  const handleCancel = () => {
    closeTicket();
  };

  const openNotification = description => {
    notification.open({
      message: 'Successful',
      description: description
    });
  };

  const ownTicket = () => {
    changeTicketOwnership(tickets.selectedTicket.id, id);
    closeTicket();
    openNotification('You have successfully owned the ticket');
  };

  const unownTicket = () => {
    changeTicketOwnership(tickets.selectedTicket.id);
    closeTicket();
    openNotification('You have successfully reassigned the ticket');
  };

  const changeStatus = value => {
    changeTicketStatus(tickets.selectedTicket.id, value);
    closeTicket();
    openNotification('Ticket Status Changed Successfully');
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
        {role === 'helper' && id === tickets.selectedTicket.helper_id && (
          <Tag color="black">Owned</Tag>
        )}
        <p>
          Created:
          {moment(tickets.selectedTicket.created_at, 'YYYYMMDD').fromNow()}
        </p>
        <Tag color="red">{tickets.selectedTicket.status}</Tag>

        {role === 'helper' && tickets.selectedTicket.helper_id === id && (
          <Select
            defaultValue={tickets.selectedTicket.status}
            style={{ width: 120 }}
            onChange={changeStatus}
          >
            <Option value="complete">Complete</Option>
            <Option value="pending">Pending</Option>
          </Select>
        )}

        <br />
        {role === 'helper' && tickets.selectedTicket.helper_id === null && (
          <Button onClick={ownTicket}>Own Ticket</Button>
        )}
        <br />
        {role === 'helper' && tickets.selectedTicket.helper_id === id && (
          <Button onClick={unownTicket}>Reassign Ticket</Button>
        )}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticket,
  user: state.user
});

const mapActionToProps = {
  closeTicket,
  changeTicketOwnership,
  changeTicketStatus
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TicketDetails);
