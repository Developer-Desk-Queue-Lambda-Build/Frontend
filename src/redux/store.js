import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { ticketReducer } from './reducers/ticketReducer';

const rootReducer = combineReducers({
  user: userReducer,
  ticket: ticketReducer
});

const middleware = [thunk];


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, {}, enhancer);

export default store;
