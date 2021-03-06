import { axiosStudentAuth } from '../../utils/axiosStudentAuth';
import {
  LOADING_UI,
  GET_ALL_TICKETS,
  CREATE_TICKET,
  DELETE_TICKET,
  VIEW_TICKET,
  CLOSE_TICKET,
  SEARCH_QUERY_CHANGE,
  TOGGLE_CREATE_TICKET
} from '../types';

export const getAllTickets = () => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosStudentAuth()
    .get('/tickets')
    .then(({ data }) => {
      dispatch({
        type: GET_ALL_TICKETS,
        payload: data
      });
    });
};

export const createTicket = ticketDetails => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosStudentAuth()
    .post('/tickets', ticketDetails)
    .then(({ data }) => {
      dispatch({
        type: CREATE_TICKET,
        payload: data
      });
    })
    .catch(err => {
      dispatch(getAllTickets());
    });
};

export const viewTicket = id => {
  return {
    type: VIEW_TICKET,
    payload: id
  };
};

export const closeTicket = () => {
  return {
    type: CLOSE_TICKET
  };
};

export const searchQueryChange = value => {
  return {
    type: SEARCH_QUERY_CHANGE,
    payload: value
  };
};

export const deleteTicket = id => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosStudentAuth()
    .delete(`/tickets/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_TICKET
      });
    });
};

export const toggleCreateTicket = () => {
  return {
    type: TOGGLE_CREATE_TICKET
  };
};
