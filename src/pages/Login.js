import React from 'react';
import '../App.css';
import { Form, Icon, Input, Button } from 'antd';
import {NavLink} from 'react-router-dom';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App-form">
      <div className="header">
      <h1>DevDesk Queue</h1>
      <h2><NavLink to="/login">Log in</NavLink></h2>
      </div>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<>
            <h3>Username</h3>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
            </>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
              <><h3>Password</h3>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
            </>,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br />
          No account yet? <NavLink to="/register">Register by clicking here</NavLink>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);