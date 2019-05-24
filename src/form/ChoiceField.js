import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

class ChoiceField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.object
    }),
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    allowMultiple: PropTypes.bool
  };

  handleChange = (id, checked) => {
    const {
      input: { value, onChange },
      options,
      allowMultiple
    } = this.props;
    let nextValue = allowMultiple ? { ...value } : {};
    if (checked) {
      nextValue[id] = true;
    } else {
      delete nextValue[id];
    }
    onChange(nextValue);
  };

  render() {
    const {
      input: { value },
      label,
      helperText,
      meta: { touched, error },
      options,
      allowMultiple,
      ...custom
    } = this.props;
    const ControlComponent = allowMultiple ? Checkbox : Radio;
    return (
      <FormControl
        error={touched && error}
        margin="dense"
        variant="outlined"
        {...custom}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <FormGroup>
          {options.map((option, i) => (
            <FormControlLabel
              key={i}
              control={
                <ControlComponent
                  checked={value[i] || false}
                  onChange={(_, checked) => this.handleChange(i, checked)}
                  color="primary"
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default ChoiceField;
