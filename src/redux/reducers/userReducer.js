import { LOGIN, LOADING, SET_ERRORS, GET_USER_DETAILS, LOGOUT } from '../types';

const initialState = {
  loading: false,
  authenticated: false,
  credentials: {},
  errors: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true
      };

    case GET_USER_DETAILS:
      return {
        ...state,
        credentials: action.payload,
        loading: false
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        errors: {}
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
