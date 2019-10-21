import axios from 'axios';
import { LOADING, LOGIN, SET_ERRORS } from '../types';

export const userLogin = (username, password) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post('https://devdesk-queue.herokuapp.com/api/auth/login', {
      username,
      password
    })
    .then(({ data }) => {
      dispatch({
        type: LOGIN
      });
      localStorage.setItem('token', `${data.token}`);
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const userSignUp = () => {};
