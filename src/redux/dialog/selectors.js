import { createSelector } from 'reselect';

export const getDialog = state => state.core.dialog;

export const getDialogById = id =>
  createSelector(
    [getDialog],
    dialog => dialog[id]
  );
