import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Checkbox = ({ input, label, meta: { touched, error }, ...custom }) => (
  <FormControlLabel
    control={
      <MuiCheckbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        color="primary"
      />
    }
    label={label}
  />
);

export default Checkbox;
