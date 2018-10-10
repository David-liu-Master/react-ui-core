import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore, combineReducers } from 'redux';
import i18nReducer from '../src/I18n/reducer';
import notificationsReducer from '../src/Notifications/reducer';

const rootReducer = combineReducers({
  i18n: i18nReducer,
  notifications: notificationsReducer
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
