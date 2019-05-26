import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import coreReducer from '../redux/reducer';

const rootReducer = combineReducers({
  core: coreReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const withReduxProvider = initialState => story => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  return <Provider store={store}>{story()}</Provider>;
};

export default withReduxProvider;
