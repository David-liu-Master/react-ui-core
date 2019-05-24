import React from 'react';
import TextField from '@material-ui/core/TextField';

const TimeField = ({
  input: { value, onChange },
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && Boolean(error)}
    variant="outlined"
    margin="dense"
    type="time"
    onChange={onChange}
    value={value || '00:00'}
    {...custom}
  />
);

export default TimeField;
