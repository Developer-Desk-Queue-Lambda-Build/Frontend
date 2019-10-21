import axios from 'axios';
import decode from 'jwt-decode';
import { LOADING, LOGIN, SET_ERRORS, GET_USER_DETAILS, LOGOUT } from '../types';
import { axiosHelperAuth } from '../../utils/axiosHelperAuth';
import { axiosStudentAuth } from '../../utils/axiosStudentAuth';

export const userLogin = (username, password, history) => dispatch => {
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
      let id = decode(data.token).subject;

      axios
        .get(`https://devdesk-queue.herokuapp.com/api/users/${id}`)
        .then(({ data }) => {
          dispatch({
            type: GET_USER_DETAILS,
            payload: data
          });
        });

      history.push('/');
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const userSignUp = (userData, history) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post('https://devdesk-queue.herokuapp.com/api/auth/signup', userData)
    .then(({ data }) => {
      userLogin(data.username, data.password, history);
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem('Token');
  delete axiosHelperAuth.defaults.headers.common['Authorization'];
  delete axiosStudentAuth.defaults.headers.common['Authorization'];
  dispatch({ type: LOGOUT });
  history.push('/login');
  window.location.reload(true);
};
