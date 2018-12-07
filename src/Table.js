import React from 'react';
import PropTypes from 'prop-types';
import { t } from '@lingui/macro';
import _difference from 'lodash/difference';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

import { i18n } from './I18nProvider';
import TableHead from './TableHead';
import TableToolbar from './TableToolbar';

export const PlainCell = ({ value }) => <span>{value}</span>;
PlainCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const BoldCell = ({ value }) => <b>{value}</b>;
BoldCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const cellTypes = {
  plain: PlainCell,
  bold: BoldCell
};

class Table extends React.Component {
  static propTypes = {
    additionalCellTypes: PropTypes.objectOf(PropTypes.func),
    columns: PropTypes.arrayOf(PropTypes.object),
    toolbar: PropTypes.shape(TableToolbar.propTypes),
    order: PropTypes.oneOf(['asc', 'desc']),
    orderBy: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    rowsCount: PropTypes.number,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    ),
    selected: PropTypes.arrayOf(PropTypes.number),
    onSelectRows: PropTypes.func,
    onDeselectRows: PropTypes.func,
    onSort: PropTypes.func,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func
  };

  static defaultProps = {
    pageSizeOptions: [5, 10, 25],
    pageSize: 5,
    page: 0,
    rowsCount: 0,
    onPageChange: () => {},
    onPageSizeChange: () => {},
    rows: [],
    columns: [],
    selected: []
  };

  isSelected = id => this.props.selected.indexOf(id) !== -1;

  handleSelectAllClick = event => {
    const { onSelectRows, onDeselectRows, rows } = this.props;
    if (event.target.checked) {
      onSelectRows(rows.map(row => row.id));
    } else {
      onDeselectRows(rows.map(row => row.id));
    }
  };

  handleSelectClick = (event, id) => {
    const { onSelectRows, onDeselectRows } = this.props;
    if (event.target.checked) {
      onSelectRows([id]);
    } else {
      onDeselectRows([id]);
    }
  };

  handleRequestSort = (event, property) => {
    const { orderBy, order, onSort } = this.props;

    const newOrderBy = property;
    let newOrder = 'desc';
    if (orderBy === newOrderBy && order === newOrder) {
      newOrder = 'asc';
    }

    onSort(newOrder, newOrderBy);
    // dispatch
  };

  handlePageChange = (event, page) => {
    const { onPageChange } = this.props;
    onPageChange(page);
  };

  handlePageSizeChange = event => {
    const { onPageSizeChange } = this.props;
    onPageSizeChange(event.target.value);
  };

  render() {
    const {
      additionalCellTypes,
      order,
      orderBy,
      page,
      pageSize,
      rowsCount,
      rows,
      columns,
      pageSizeOptions,
      selected,
      onSelectRows,
      onSort,
      toolbar
    } = this.props;

    const combinedCellTypes = {
      ...cellTypes,
      ...additionalCellTypes
    };

    const maxRowsOnPage = rowsCount < pageSize ? rowsCount : pageSize;

    const numNotSelectedOnPage = _difference(rows.map(row => row.id), selected)
      .length;

    return (
      <Paper>
        {toolbar && <TableToolbar selected={selected} {...toolbar} />}
        <div>
          <MuiTable>
            <TableHead
              order={order}
              orderBy={orderBy}
              onSelectAllClick={onSelectRows ? this.handleSelectAllClick : null}
              onRequestSort={onSort ? this.handleRequestSort : null}
              selectedAllOnPage={numNotSelectedOnPage === 0}
              numSelectedOnPage={maxRowsOnPage - numNotSelectedOnPage}
              columns={columns}
            />
            <TableBody>
              {rows.map(row => (
                <TableRow hover key={row.id}>
                  {onSelectRows && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={this.isSelected(row.id)}
                        onClick={event => this.handleSelectClick(event, row.id)}
                      />
                    </TableCell>
                  )}
                  {columns.map(column => {
                    const CellType = combinedCellTypes[column.type || 'plain'];
                    return (
                      <TableCell
                        key={column.id}
                        padding={column.disablePadding ? 'none' : 'default'}
                        numeric={column.numeric}
                      >
                        <CellType
                          id={row.id}
                          value={row[column.id]}
                          {...column.cellProps}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
          <TablePagination
            rowsPerPageOptions={pageSizeOptions}
            component="div"
            count={rowsCount}
            rowsPerPage={pageSize}
            page={page}
            labelDisplayedRows={({ from, to, count }) =>
              i18n._(t`${from}-${to} of ${count}`)
            }
            labelRowsPerPage={i18n._(t`Rows per page:`)}
            backIconButtonProps={{
              'aria-label': i18n._(t`Previous Page`)
            }}
            nextIconButtonProps={{
              'aria-label': i18n._(t`Next Page`)
            }}
            onChangePage={this.handlePageChange}
            onChangeRowsPerPage={this.handlePageSizeChange}
          />
        </div>
      </Paper>
    );
  }
}

export default Table;
