import {
  GET_ALL_TICKETS,
  CREATE_TICKET,
  EDIT_TICKET,
  DELETE_TICKET,
  VIEW_TICKET,
  CLOSE_TICKET,
  SEARCH_QUERY_CHANGE,
  LOADING_UI
} from '../types';

const initialState = {
  allTickets: [],
  showModal: false,
  selectedTicket: {},
  searchQuery: '',
  loading: false
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TICKETS:
      return {
        ...state,
        loading: false,
        allTickets: action.payload
      };

    case CREATE_TICKET:
      return {
        ...state,
        loading: false,
        allTickets: [...state.allTickets, action.payload]
      };

    case EDIT_TICKET:
      return {
        ...state,
        loading: false,
        allTickets: state.allTickets.map(ticket =>
          ticket.id === action.payload.id ? action.payload : ticket
        )
      };

    case LOADING_UI:
      return {
        ...state,
        loading: true
      };

    case SEARCH_QUERY_CHANGE:
      return {
        ...state,
        searchQuery: action.payload
      };

    case VIEW_TICKET:
      return {
        ...state,
        showModal: true,
        selectedTicket: state.allTickets.find(
          ticket => ticket.id === action.payload
        )
      };

    case CLOSE_TICKET:
      return {
        ...state,
        showModal: false,
        selectedTicket: {}
      };

    case DELETE_TICKET:
      return {
        ...state,
        loading: false,
        allTickets: state.allTickets.filter(
          ticket => ticket.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
