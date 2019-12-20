import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const SelectField = ({
  input,
  meta: { touched, error },
  options,
  native,
  ...custom
}) => (
  <TextField
    error={touched && error}
    margin="dense"
    variant="outlined"
    displayEmpty={!native}
    select
    SelectProps={{
      native
    }}
    {...input}
    {...custom}
  >
    {options.map(({ node, value }) =>
      native ? (
        <option key={value} value={value}>
          {node}
        </option>
      ) : (
        <MenuItem key={value} value={value}>
          {node}
        </MenuItem>
      )
    )}
  </TextField>
);

export default SelectField;
