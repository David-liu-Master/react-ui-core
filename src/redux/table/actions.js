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
  ROWS_ROLLBACK,
  REFRESH
} from './constants';

export function init(tableId) {
  return {
    type: INIT,
    payload: {
      tableId
    }
  };
}

export function selectRows(tableId, rowIds) {
  return {
    type: SELECT_ROWS,
    payload: {
      tableId,
      rowIds
    }
  };
}

export function deselectRows(tableId, rowIds) {
  return {
    type: DESELECT_ROWS,
    payload: {
      tableId,
      rowIds
    }
  };
}

export function setPage(tableId, page) {
  return {
    type: SET_PAGE,
    payload: {
      tableId,
      page
    }
  };
}

export function setPageSize(tableId, pageSize) {
  return {
    type: SET_PAGE_SIZE,
    payload: {
      tableId,
      pageSize
    }
  };
}

export function setRowsCount(tableId, rowsCount) {
  return {
    type: SET_ROWS_COUNT,
    payload: {
      tableId,
      rowsCount
    }
  };
}

export function sort(tableId, order, orderBy) {
  return {
    type: SORT,
    payload: {
      tableId,
      order,
      orderBy
    }
  };
}

export function getRows(tableId, axios, url, rowsSelector, countSelector) {
  return dispatch => {
    dispatch(getRowsRequest(tableId));
    return axios
      .get(url)
      .then(response => {
        dispatch(setRowsCount(tableId, countSelector(response.data)));
        return dispatch(getRowsCommit(tableId, rowsSelector(response.data)));
      })
      .catch(() => dispatch(getRowsRollback(tableId)));
  };
}

function getRowsRequest(tableId) {
  return {
    type: ROWS_REQUEST,
    payload: {
      tableId
    }
  };
}

function getRowsCommit(tableId, rows) {
  return {
    type: ROWS_COMMIT,
    payload: {
      tableId,
      rows
    }
  };
}

function getRowsRollback(tableId) {
  return {
    type: ROWS_ROLLBACK,
    payload: {
      tableId
    }
  };
}

export function refresh(tableId) {
  return {
    type: REFRESH,
    payload: {
      tableId
    }
  };
}
