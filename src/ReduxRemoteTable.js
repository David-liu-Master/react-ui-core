import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEqual from 'lodash/isEqual';

import {
  setPage,
  setPageSize,
  sort,
  getRows,
  selectRows,
  deselectRows,
  init
} from './redux/table/actions';
import { getTableById } from './redux/table/selectors';
import Table from './Table';

export const constructElasticPagingURL = baseURL => (
  page,
  pageSize,
  order,
  orderBy
) => {
  const query = {
    offset: page * pageSize,
    limit: pageSize,
    sort: {
      [orderBy]: order
    }
  };
  return `${baseURL}?query=${encodeURIComponent(JSON.stringify(query))}`;
};

class ReduxRemoteTable extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    disableSort: PropTypes.bool,
    disableSelect: PropTypes.bool,
    axios: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    hasFailed: PropTypes.bool,
    rows: PropTypes.array,
    rowsCount: PropTypes.number,
    selected: PropTypes.arrayOf(PropTypes.number),
    page: PropTypes.number,
    pageSize: PropTypes.number,
    order: PropTypes.oneOf(['asc', 'desc']),
    orderBy: PropTypes.string,
    constructPagingURL: PropTypes.func.isRequired,
    rowsSelector: PropTypes.func,
    countSelector: PropTypes.func,
    handleSelectRows: PropTypes.func.isRequired,
    handleDeselectRows: PropTypes.func.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    handlePageSizeChange: PropTypes.func.isRequired,
    handleSort: PropTypes.func.isRequired,
    fetchRows: PropTypes.func.isRequired,
    needsRefresh: PropTypes.bool
  };

  static defaultProps = {
    rowsSelector: data => data,
    countSelector: data => data
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentDidUpdate(prevProps) {
    const {
      constructPagingURL,
      fetchRows,
      page,
      pageSize,
      order,
      orderBy,
      needsRefresh
    } = this.props;
    if (
      page != prevProps.page ||
      pageSize != prevProps.pageSize ||
      order != prevProps.order ||
      orderBy != prevProps.orderBy ||
      needsRefresh
    ) {
      fetchRows(constructPagingURL(page, pageSize, order, orderBy));
    }
  }

  shouldComponentUpdate(nextProps) {
    const { page, pageSize, order, orderBy, rows, selected } = this.props;
    const update =
      page != nextProps.page ||
      pageSize != nextProps.pageSize ||
      order != nextProps.order ||
      orderBy != nextProps.orderBy ||
      nextProps.needsRefresh ||
      !_isEqual(rows, nextProps.rows) ||
      !_isEqual(selected, nextProps.selected);
    return update;
  }

  render() {
    const {
      disableSelect,
      disableSort,
      handleSelectRows,
      handleDeselectRows,
      handlePageChange,
      handlePageSizeChange,
      handleSort
    } = this.props;
    return (
      <Table
        {...this.props}
        onSelectRows={disableSelect ? null : handleSelectRows}
        onDeselectRows={handleDeselectRows}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        onSort={disableSort ? null : handleSort}
      />
    );
  }
}

const mapStateToProps = (state, { id }) => ({
  ...getTableById(id)(state)
});

const mapDispatchToProps = (
  dispatch,
  { axios, id, rowsSelector, countSelector }
) => ({
  init: () => dispatch(init(id)),
  handleSelectRows: rowIds => dispatch(selectRows(id, rowIds)),
  handleDeselectRows: rowIds => dispatch(deselectRows(id, rowIds)),
  handlePageChange: page => dispatch(setPage(id, page)),
  handlePageSizeChange: pageSize => dispatch(setPageSize(id, pageSize)),
  handleSort: (order, orderBy) => dispatch(sort(id, order, orderBy)),
  fetchRows: url =>
    dispatch(getRows(id, axios, url, rowsSelector, countSelector))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxRemoteTable);
