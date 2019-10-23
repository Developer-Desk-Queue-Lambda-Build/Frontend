import { axiosHelperAuth } from '../../utils/axiosHelperAuth';
import { LOADING_UI, EDIT_TICKET } from '../types';

export const changeTicketOwnership = (
  ticketId,
  helperId = null
) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosHelperAuth()
    .put(`/tickets/${ticketId}`, { helper_id: helperId })
    .then(({ data }) => {
      dispatch({
        type: EDIT_TICKET,
        payload: data
      });
    });
};

export const changeTicketStatus = (ticketId, status) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosHelperAuth()
    .put(`/tickets/${ticketId}`, { status })
    .then(({ data }) => {
      dispatch({
        type: EDIT_TICKET,
        payload: data
      });
    });
};

