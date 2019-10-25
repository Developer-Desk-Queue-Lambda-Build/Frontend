import React from 'react';
import { Modal, Button, notification, Form, Input } from 'antd';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import {
  toggleCreateTicket,
  createTicket
} from '../redux/actions/studentActionCreators';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 80%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
  }
`;

const { TextArea } = Input;

let createSuccessful;

const C = ({
  tickets,
  toggleCreateTicket,
  user: {
    credentials: { role, id }
  },
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors
}) => {
  const handleCancel = () => {
    toggleCreateTicket();
  };

  const openNotification = description => {
    notification.open({
      message: 'Successful',
      description: description
    });
  };

  createSuccessful = () => {
    toggleCreateTicket();
    openNotification('You have successfully created the ticket');
  };

  return (
    <div>
      <Modal
        title="Create a Ticket"
        visible={tickets.showCreateTicket}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
        ]}
      >
        <StyledForm className="login-form" onSubmit={handleSubmit}>
          <Form.Item
            help={touched.title && errors.title ? errors.title : ''}
            validateStatus={touched.title && errors.title ? 'error' : undefined}
          >
            <Input
              size="large"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Title"
              maxLength={30}
            />
          </Form.Item>

          <Form.Item
            help={
              touched.description && errors.description
                ? errors.description
                : ''
            }
            validateStatus={
              touched.category && errors.description ? 'error' : undefined
            }
          >
            <TextArea
              name="description"
              placeholder="Description"
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </StyledForm>
      </Modal>
    </div>
  );
};

const CreateTicket = withFormik({
  mapPropsToValues: () => ({ title: '', description: '' }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.createTicket({
      ...values,
      status: 'pending',
      student_id: props.user.credentials.id
    });
    createSuccessful();
    setSubmitting(false);
  }
})(C);

const mapStateToProps = state => ({
  tickets: state.ticket,
  user: state.user
});

const mapActionToProps = {
  toggleCreateTicket,
  createTicket
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(CreateTicket);
