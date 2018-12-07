import produce from 'immer';
import _uniq from 'lodash/uniq';
import _difference from 'lodash/difference';
import {
  INIT,
  SELECT_ROWS,
  DESELECT_ROWS,
  SET_PAGE,
  SET_PAGE_SIZE,
  SET_ROWS_COUNT,
  SORT,
  ROWS_REQUEST,
  ROWS_COMMIT,
  ROWS_ROLLBACK
} from './constants';

const initialState = {};

const initialTableState = {
  isFetching: false,
  hasFailed: false,
  rows: [],
  selected: [],
  rowsCount: 0,
  page: 0,
  pageSize: 5,
  order: 'asc',
  orderBy: null
};

export default (state = initialState, action) =>
  produce(state, draft => {
    let table;
    switch (action.type) {
      case INIT:
        if (!(action.payload.tableId in draft)) {
          draft[action.payload.tableId] = initialTableState;
        }
        break;
      case SET_ROWS_COUNT:
        table = draft[action.payload.tableId];
        table.rowsCount = action.payload.rowsCount;
        break;
      case SELECT_ROWS:
        table = draft[action.payload.tableId];
        table.selected = _uniq([...table.selected, ...action.payload.rowIds]);
        break;
      case DESELECT_ROWS:
        table = draft[action.payload.tableId];
        table.selected = _difference(table.selected, action.payload.rowIds);
        break;
      case SET_PAGE:
        table = draft[action.payload.tableId];
        table.page = action.payload.page;
        break;
      case SET_PAGE_SIZE:
        table = draft[action.payload.tableId];
        table.pageSize = action.payload.pageSize;
        table.page = 0;
        break;
      case SORT:
        table = draft[action.payload.tableId];
        table.order =
          table.orderby == action.payload.orderby && table.order == 'desc'
            ? 'asc'
            : 'desc';
        table.order = action.payload.order;
        table.orderBy = action.payload.orderBy;
        break;
      case ROWS_REQUEST:
        table = draft[action.payload.tableId];
        table.isFetching = true;
        table.hasFailed = false;
        break;
      case ROWS_COMMIT:
        table = draft[action.payload.tableId];
        table.isFetching = false;
        table.rows = action.payload.rows;
        break;
      case ROWS_ROLLBACK:
        table = draft[action.payload.tableId];
        table.isFetching = false;
        table.hasFailed = true;
        break;
    }
  });