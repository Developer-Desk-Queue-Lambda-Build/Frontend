import React, {Component} from 'react';
import { Modal, Button, Input, Form } from 'antd';

export default class CreateTicket extends Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 1000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}
        style={{
            background: '#22942D',
            border: 'none',
            color: 'white',
            marginTop: '10%',
            textAlign: 'center'
          }}
        >
          Create Ticket +
        </Button>
        <Modal
        centered="true"
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form>
            <h3>Title</h3>
            <Input type="text"/>
            <h3>Category</h3>
            <Input type="text"/>
            <h3>Description of issue</h3>
            <Input.TextArea autoSize='true'/>
          </Form>
        </Modal>
      </div>
    );
  }
}

