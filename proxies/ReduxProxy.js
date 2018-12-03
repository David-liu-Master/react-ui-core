import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import coreReducer from '../src/redux/reducer';

const rootReducer = combineReducers({
  core: coreReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createReduxProxy({
  createStore: state =>
    createStore(rootReducer, state, composeEnhancers(applyMiddleware(thunk)))
});
