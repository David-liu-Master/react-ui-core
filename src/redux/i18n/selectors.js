import { createSelector } from 'reselect';

export const getI18n = state => state.core.i18n;

export const getLanguage = createSelector(
  [getI18n],
  i18n => {
    return i18n.language;
  }
);
