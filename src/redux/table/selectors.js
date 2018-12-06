import { createSelector } from 'reselect';

export const getTable = state => state.core.table;

export const getTableById = id =>
  createSelector(
    [getTable],
    table => table[id]
  );
