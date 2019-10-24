import React from 'react';
import '../App.css';
import { Tooltip, Radio, Form, Icon, Input, Button, Spin } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';
import { withFormik } from 'formik';
import { connect } from 'react-redux';

import * as yup from 'yup';
import { userSignUp } from '../redux/actions/userActionCreators';

const C = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors
  } = props;
  return (
    <div>
      {localStorage.getItem('token') && <Redirect to="/dashboard" />}
      <div className="header">
        <h1>DevDesk Queue</h1>
        <h2>
          <NavLink to="/signup">Sign up</NavLink>
        </h2>
      </div>
      <div className="login-form" style={{ padding: '50px' }}>
        <form onSubmit={handleSubmit}>
          <Form.Item
            help={touched.name && errors.name ? errors.name : ''}
            validateStatus={touched.name && errors.name ? 'error' : undefined}
          >
            <Input
              size="large"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.email && errors.email ? errors.email : ''}
            validateStatus={touched.email && errors.email ? 'error' : undefined}
          >
            <Input
              size="large"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.username && errors.username ? errors.username : ''}
            validateStatus={
              touched.username && errors.username ? 'error' : undefined
            }
          >
            <Input
              size="large"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.password && errors.password ? errors.password : ''}
            validateStatus={
              touched.password && errors.password ? 'error' : undefined
            }
          >
            <Input.Password
              size="large"
              name="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.password2 && errors.password2 ? errors.password2 : ''}
            validateStatus={
              touched.password2 && errors.password2 ? 'error' : undefined
            }
          >
            <Input.Password
              size="large"
              name="password2"
              placeholder="Confirm Password"
              value={values.password2}
              onBlur={handleBlur}
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item>
            <Radio.Group
              name="role"
              defaultValue={1}
              value={values.role}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <Radio value={1}>I am a Student</Radio>
              <Radio value={2}>I am a Helper</Radio>
            </Radio.Group>
            <Tooltip title="Helpers are team leads and instructors dedicated to helping resolve issues">
              <Icon type="question-circle" />
            </Tooltip>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ background: '#DA3030', border: 'none', margin: '0' }}
            >
              Register
            </Button>
            <br />
            Or <NavLink to="/login">log in instead</NavLink>
            <br />
            {props.user.loading && <Spin />}
          </Form.Item>
        </form>
      </div>
    </div>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Please provide a username'),
  name: yup
    .string()
    .required('Please provide your first name')
    .min(2, 'Name is too short'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Please provide an email'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(8, 'Password too short'),
  password2: yup
    .string()
    .required("Passwords don't match")
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Register = withFormik({
  mapPropsToValues: () => ({
    name: '',
    password: '',
    password2: '',
    email: '',
    username: '',
    role: 1
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userSignUp(
      {
        email: values.email,
        password: values.password,
        username: values.username,
        role: values.role === 1 ? 'student' : 'helper'
      },
      props.history
    );
    setSubmitting(false);
  },
  validationSchema: validationSchema
})(C);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { userSignUp }
)(Register);
