import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore, combineReducers } from 'redux';
import i18nReducer from '../src/redux/i18n/reducer';
import notificationsReducer from '../src/redux/notifications/reducer';
import layoutReducer from '../src/redux/layout/reducer';
import themeReducer from '../src/redux/theme/reducer';

const rootReducer = combineReducers({
  i18n: i18nReducer,
  notifications: notificationsReducer,
  layout: layoutReducer,
  theme: themeReducer
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
