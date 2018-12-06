import { combineReducers } from 'redux';
import i18n from './i18n/reducer';
import layout from './layout/reducer';
import notifications from './notifications/reducer';
import theme from './theme/reducer';
import { reducer as form } from '../form';

export default combineReducers({
  i18n,
  layout,
  notifications,
  theme,
  form
});
