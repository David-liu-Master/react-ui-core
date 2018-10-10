import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio/Radio';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import IconButton from '@material-ui/core/IconButton/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class Matrix extends React.Component {
  onChange = (e, rowId, columnId, additional = false) => {
    const { value, onChange, input } = this.props;
    let nextValue = { ...value };
    let nextValues = { ...nextValue.values };
    if (additional) {
      nextValues = { ...nextValue.additionalValues };
    }
    let nextRow = nextValues[rowId] || {};

    // standard input should be single-choice, therefore undefined is handled as single-choice
    if (input.type === 'single-choice' || input.type === undefined) {
      nextRow = {};
    }

    if (!e) {
      delete nextRow[columnId];
    } else {
      nextRow[columnId] = e;
    }
    nextValues[rowId] = nextRow;
    if (additional) {
      nextValue.additionalValues = nextValues;
    } else {
      nextValue.values = nextValues;
    }
    onChange(nextValue);
  };

  getValue = (rowId, columnId, additional = false) => {
    const { value } = this.props;
    let values = value.values || {};
    if (additional) {
      values = value.additionalValues || {};
    }
    if (values[rowId]) {
      if (values[rowId][columnId]) {
        return values[rowId][columnId];
      }
    }
    return '';
  };

  onRowChange = (e, i) => {
    const { onChange, value } = this.props;
    const nextValue = { ...value };
    const nextAdditionalRows = [...nextValue.additionalRows];
    nextAdditionalRows[i] = e.target.value;

    nextValue.additionalRows = nextAdditionalRows;
    onChange(nextValue);
  };

  onRowAdd = () => {
    const { onChange, value } = this.props;
    const nextValue = { ...value };
    const nextAdditionalRows = [...nextValue.additionalRows];
    nextAdditionalRows.push('');

    nextValue.additionalRows = nextAdditionalRows;
    onChange(nextValue);
  };

  onRowDelete = i => {
    const { onChange, value } = this.props;
    const nextValue = { ...value };
    const nextAdditionalRows = [...nextValue.additionalRows];
    nextAdditionalRows.splice(i, 1);

    nextValue.additionalRows = nextAdditionalRows;
    onChange(nextValue);
  };

  renderCell = (rowId, columnId, additional = false) => {
    const { input } = this.props;

    const value = this.getValue(rowId, columnId, additional);

    switch (input.type) {
      case 'multiple-choice':
        return (
          <Checkbox
            checked={value === true}
            onChange={(e, checked) =>
              this.onChange(checked, rowId, columnId, additional)
            }
          />
        );
      case 'text':
        return (
          <TextField
            value={value}
            onChange={e =>
              this.onChange(e.target.value, rowId, columnId, additional)
            }
          />
        );
      default:
        return (
          <Radio
            checked={value === true}
            onChange={(e, checked) =>
              this.onChange(checked, rowId, columnId, additional)
            }
          />
        );
    }
  };

  render() {
    const { columns, rows, allowAdditional, value } = this.props;
    const additionalRows = value.additionalRows || [];
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {columns.map((column, i) => (
              <TableCell style={{ textAlign: 'center' }} key={i}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell
                style={{ width: '100%', minWidth: 20 }}
                key={i + '.head'}
              >
                {row}
              </TableCell>
              {columns.map((columns, k) => (
                <TableCell key={i + '.' + k}>{this.renderCell(i, k)}</TableCell>
              ))}
            </TableRow>
          ))}
          {allowAdditional && (
            <React.Fragment>
              {additionalRows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell
                    style={{ width: '100%', minWidth: 20 }}
                    key={i + '.head'}
                  >
                    <IconButton onClick={() => this.onRowDelete(i)}>
                      <DeleteIcon />
                    </IconButton>
                    <TextField
                      onChange={e => this.onRowChange(e, i)}
                      value={row}
                    />
                  </TableCell>
                  {columns.map((columns, k) => (
                    <TableCell key={i + '.' + k}>
                      {this.renderCell(i, k, true)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <IconButton onClick={this.onRowAdd}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                {columns.map((columns, k) => (
                  <TableCell key={k} />
                ))}
              </TableRow>
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    );
  }
}
Matrix.propTypes = {
  onChange: PropTypes.func,
  input: PropTypes.shape({
    type: PropTypes.oneOf(['single-choice', 'multiple-choice', 'text'])
  }),
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.string),
  allowAdditional: PropTypes.bool,
  value: PropTypes.object
};

Matrix.defaultProps = {
  onChange: () => {},
  edit: false,
  value: {
    values: {},
    additionalValues: {},
    additionalRows: []
  },
  columns: [],
  input: {},
  rows: [],
  allowAdditional: false
};

export default Matrix;
