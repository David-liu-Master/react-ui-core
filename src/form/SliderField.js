import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

class SliderField extends React.Component {
  static propTypes = {
    input: {
      value: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired
    },
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    label: PropTypes.node,
    helperText: PropTypes.node
  };

  handleChange = (_, value) => {
    const {
      input: { onChange }
    } = this.props;
    onChange(value);
  };

  render() {
    const {
      input: { value },
      meta: { touched, error },
      max,
      min,
      step,
      label,
      helperText,
      fullWidth,
      ...custom
    } = this.props;
    return (
      <FormControl
        error={touched && error}
        margin="dense"
        fullWidth={fullWidth}
        {...custom}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <Slider
          style={{ padding: '22px 0px' }}
          max={max}
          min={min}
          step={step}
          value={value}
          onChange={this.handleChange}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default SliderField;
