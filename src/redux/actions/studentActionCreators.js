import { axiosStudentAuth } from '../../utils/axiosStudentAuth';
import {
  LOADING_UI,
  GET_ALL_TICKETS,
  CREATE_TICKET,
  DELETE_TICKET
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
    });
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
