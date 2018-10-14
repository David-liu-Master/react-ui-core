import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Text extends React.Component {
  onChange = e => {
    const value = e.currentTarget.value;
    this.props.onChange(value);
  };

  render() {
    const { input, value } = this.props;
    return (
      <TextField
        {...input}
        variant="outlined"
        fullWidth
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
Text.propTypes = {
  onChange: PropTypes.func,
  input: PropTypes.shape({
    multiline: PropTypes.bool,
    type: PropTypes.oneOf(['number', 'text', 'email', 'password']),
    rows: PropTypes.number
  }),
  value: PropTypes.string
};

Text.defaultProps = {
  onChange: () => {},
  input: {},
  content: {},
  value: ''
};

export default Text;
