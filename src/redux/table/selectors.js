import { createSelector } from 'reselect';

export const getTable = state => state.core.table;

export const getTableById = id =>
  createSelector(
    [getTable],
    table => table[id]
  );

export const getSelectedForTableId = id =>
  createSelector(
    [getTableById(id)],
    table => (table ? table.selected : [])
  );
