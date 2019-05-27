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
    {options.map((optionText, i) =>
      native ? (
        <option key={i} value={i}>
          {optionText}
        </option>
      ) : (
        <MenuItem key={i} value={i}>
          {optionText}
        </MenuItem>
      )
    )}
  </TextField>
);

export default SelectField;
