import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { Field } from './';
import TextField from './TextField';

class TextFieldArray extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    label: PropTypes.node,
    helperText: PropTypes.node,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {};

  render() {
    const { fields, label, helperText, fullWidth, ...custom } = this.props;
    return (
      <FormControl fullWidth={fullWidth} margin="dense" {...custom}>
        {label && <FormLabel>{label}</FormLabel>}
        {fields.map((field, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Field name={field} fullWidth={fullWidth} component={TextField} />
            <Tooltip title={<Trans>Delete</Trans>} aria-label="Delete">
              <IconButton onClick={() => fields.remove(index)}>
                <Icon>delete</Icon>
              </IconButton>
            </Tooltip>
          </div>
        ))}
        <Button onClick={() => fields.push()}>
          <Trans>Add Element</Trans>
        </Button>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default TextFieldArray;
