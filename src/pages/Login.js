import React from 'react';
import '../App.css';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { NavLink, Redirect } from 'react-router-dom';

import { withFormik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions/userActionCreators';

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
    <>
      {localStorage.getItem('token') && <Redirect to="/dashboard" />}
      <div className="header">
        <h1>DevDesk Queue</h1>
        <h2>
          <NavLink to="/login">Log in</NavLink>
        </h2>
      </div>
      <div className="App-form">
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <br />
            No account yet?{' '}
            <NavLink to="/signup">Register by clicking here</NavLink>
          </Form.Item>
        </form>

        {props.user.loading && <Spin />}
      </div>
    </>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Please provide a name'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(4, 'Password too short')
});

const Login = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.userLogin(values.username, values.password, props.history);
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
  { userLogin }
)(Login);
