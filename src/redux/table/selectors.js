import { createSelector } from 'reselect';

export const getTable = state => state.core.table;

export const getTableById = id =>
  createSelector(
    [getTable],
    table => table[id]
  );

export const getSelectionForTableId = id =>
  createSelector(
    [getTableById(id)],
    table => table.selection
  );
