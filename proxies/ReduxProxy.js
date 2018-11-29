import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore, combineReducers } from 'redux';
import coreReducer from '../src/redux/reducer';

const rootReducer = combineReducers({
  core: coreReducer
});

export default createReduxProxy({
  createStore: state =>
    createStore(
      rootReducer,
      state,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
});
