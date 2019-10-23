import axios from 'axios';
import decode from 'jwt-decode';
import { LOADING, LOGIN, SET_ERRORS, GET_USER_DETAILS, LOGOUT } from '../types';

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
      history.push('/dashboard');

      axios
        .get(`https://devdesk-queue.herokuapp.com/api/users/${id}`)
        .then(({ data }) => {
          dispatch({
            type: GET_USER_DETAILS,
            payload: data
          });
        });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const userSignUp = (userData, history) => dispatch => {
  debugger;
  console.log(userData);
  dispatch({ type: LOADING });
  axios
    .post('https://devdesk-queue.herokuapp.com/api/auth/register', userData)
    .then(({ data }) => {
      dispatch(userLogin(userData.username, userData.password, history));
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err
      });
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem('token');
  // delete axiosHelperAuth.defaults.headers.common['Authorization'];
  // delete axiosStudentAuth.defaults.headers.common['Authorization'];
  dispatch({ type: LOGOUT });
  history.push('/login');
  window.location.reload(true);
};
