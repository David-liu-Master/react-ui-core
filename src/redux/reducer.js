import { combineReducers } from 'redux';
import i18n from './i18n/reducer';
import layout from './layout/reducer';
import notifications from './notifications/reducer';
import theme from './theme/reducer';
import { reducer as form } from '../form';
import table from './table/reducer';
import dialog from './dialog/reducer';

export default combineReducers({
  i18n,
  layout,
  notifications,
  theme,
  form,
  table,
  dialog
});
