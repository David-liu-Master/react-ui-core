import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const ColorField = ({
  input: { value, onChange },
  label,
  meta: { touched, error },
  ...custom
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = color => {
    onChange(color.hex);
  };

  const color = value || '#FFF';

  return (
    <React.Fragment>
      <TextField
        label={label}
        error={touched && Boolean(error)}
        variant="outlined"
        margin="dense"
        InputProps={{
          startAdornment: (
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: color,
                marginRight: 10
              }}
            />
          )
        }}
        onClick={() => setShowPicker(true)}
        onChange={onChange}
        value={color}
        {...custom}
      />
      {showPicker && (
        <ClickAwayListener onClickAway={() => setShowPicker(false)}>
          <GithubPicker color={color} onChange={handleChange} />
        </ClickAwayListener>
      )}
    </React.Fragment>
  );
};

export default ColorField;
