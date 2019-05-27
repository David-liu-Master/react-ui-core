import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

const TextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MuiTextField
    label={label}
    error={touched && Boolean(error)}
    variant="outlined"
    margin="dense"
    {...input}
    {...custom}
  />
);

export default TextField;
