import { createSelector } from 'reselect';

const getI18n = state => state.i18n;

export const getLanguage = createSelector([getI18n], i18n => {
  return i18n.language;
});
