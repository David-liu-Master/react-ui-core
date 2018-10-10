import React from 'react';
import PropTypes from 'prop-types';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Select extends React.Component {
  onChange = e => {
    const value = e.target.value;
    this.props.onChange(value);
  };

  render() {
    const { options, value } = this.props;

    return (
      <MuiSelect value={value} onChange={this.onChange}>
        {options.map((option, i) => (
          <MenuItem value={option} key={i}>
            {option}
          </MenuItem>
        ))}
      </MuiSelect>
    );
  }
}
Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Select.defaultProps = {
  onChange: () => {},
  edit: false,
  options: [],
  value: 0
};

export default Select;
