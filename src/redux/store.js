import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { ticketReducer } from './reducers/ticketsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  ticket: ticketReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
