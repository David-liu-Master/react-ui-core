import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Checkbox = ({ input, label, meta: { touched, error }, ...custom }) => (
  <FormControl error={touched && error}>
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
  </FormControl>
);

export default Checkbox;
