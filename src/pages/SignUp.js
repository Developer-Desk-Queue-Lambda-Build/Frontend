import React from 'react';
import '../App.css';
import { Tooltip, Radio, Form, Icon, Input, Button} from 'antd';
import {NavLink} from 'react-router-dom';



class SignUp extends React.Component {
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
      <Form onSubmit={this.handleSubmit} className="login-form">          
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <>
            <h3>Username</h3>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
            </>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your email address!' }],
          })(
            <>
            <h3>Email Address</h3>
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
            </>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <>
            <h3>Password</h3>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
            </>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
        <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio value={1}>I am a Student</Radio>
        <Radio value={2}>I am a helper</Radio>
      </Radio.Group>)}
        <Tooltip title="Helpers are team leads and instructors dedicated to helping resolve issues">
            <Icon type="question-circle" />
        </Tooltip>
        <br />
        <div style={{ textAlign: "center"}}>
          <Button type="primary" htmlType="submit" style={{ background: "#DA3030", border: "none", margin: "0"}}>
            Register
          </Button>
          </div>
          <br/>
          Or <NavLink to="/login">log in instead</NavLink>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export const SignUpForm = Form.create({ name: 'normal_login' })(SignUp);
