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
    type="date"
    onChange={onChange}
    value={value || '1970-01-01'}
    {...custom}
  />
);

export default TimeField;
