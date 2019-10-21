import { LOGIN, LOADING, SET_ERRORS } from '../types';

const initialState = {
  loading: false,
  authenticated: false,
  errors: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...initialState,
        loading: false,
        authenticated: true
      };

    case LOADING:
      return {
        loading: true
      };

    case SET_ERRORS:
      return {
        errors: action.payload
      };

    default:
      return state;
  }
};
