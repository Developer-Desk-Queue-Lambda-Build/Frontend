import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { ticketReducer } from './reducers/ticketReducer';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const rootReducer = combineReducers({
  user: userReducer,
  ticket: ticketReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
