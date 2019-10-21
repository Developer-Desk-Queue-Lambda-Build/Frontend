import {
  LOADING,
  SET_ERRORS,
  GET_ALL_TICKETS,
  CREATE_TICKET,
  EDIT_TICKET
} from '../types';

const initialState = {
  allTickets: [],
  selectedTicket: {},
  ownedTickets: []
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TICKETS:
      return {
        ...initialState,
        loading: false,
        openTickets: action.payload
      };

    case CREATE_TICKET:
      return {
        ...initialState,
        loading: false,
        allTickets: [...state.openTickets, action.payload]
      };

    case EDIT_TICKET:
      return {
        ...initialState,
        loading: false,
        ownedTickets: state.ownedTickets.map(ticket =>
          ticket.id === action.payload.id ? action.payload : ticket
        )
      };

    case LOADING:
      return {
        loading: true
      };

    default:
      return state;
  }
};
