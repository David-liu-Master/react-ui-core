import React from 'react';
import PropTypes from 'prop-types';
import MuiTableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';

class TableHead extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']),
    orderBy: PropTypes.string,
    numSelectedOnPage: PropTypes.number,
    selectedAllOnPage: PropTypes.bool,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        label: PropTypes.string.isRequired,
        numeric: PropTypes.bool,
        disablePadding: PropTypes.bool
      })
    )
  };

  static defaultProps = {
    columns: []
  };

  createSortHandler = property => event => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };
  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      selectedAllOnPage,
      numSelectedOnPage,
      columns,
      onRequestSort
    } = this.props;
    return (
      <MuiTableHead>
        <TableRow>
          {onSelectAllClick && (
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelectedOnPage > 0 && !selectedAllOnPage}
                checked={selectedAllOnPage}
                onChange={onSelectAllClick}
              />
            </TableCell>
          )}
          {columns.map(column => (
            <TableCell
              key={column.id}
              numeric={column.numeric}
              padding={column.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy == column.id ? order : false}
            >
              {onRequestSort ? (
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy == column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              ) : (
                column.label
              )}
            </TableCell>
          ))}
        </TableRow>
      </MuiTableHead>
    );
  }
}

export default TableHead;
