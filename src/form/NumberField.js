import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from '@material-ui/core/TextField';

class NumberField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.number,
      onChange: PropTypes.func
    }),
    max: PropTypes.number,
    min: PropTypes.number
  };

  static defaultProps = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER
  };

  handleChange = e => {
    const {
      input: { onChange },
      max,
      min
    } = this.props;
    const number = e.target.value;
    if (number >= min && number <= max) {
      onChange(number);
    }
  };
  render() {
    const {
      input: { value },
      label,
      meta: { touched, error },
      ...custom
    } = this.props;
    return (
      <MuiTextField
        label={label}
        error={touched && error}
        variant="outlined"
        margin="dense"
        type="number"
        value={value}
        onChange={this.handleChange}
        {...custom}
      />
    );
  }
}

export default NumberField;
