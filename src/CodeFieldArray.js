import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { Field } from './';
import CodeField from './CodeField';
import TextField from './TextField';

const styles = theme => {
  const borderColor =
    theme.palette.type === 'light'
      ? 'rgba(0, 0, 0, 0.23)'
      : 'rgba(255, 255, 255, 0.23)';

  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1
    },
    placeholder: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 100,
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};

class CodeFieldArray extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
    label: PropTypes.node,
    helperText: PropTypes.node,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    margin: 'normal'
  };

  state = {
    tab: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  moveRight = () => {
    const { fields } = this.props;
    const { tab } = this.state;
    if (tab < fields.length - 1) {
      fields.swap(tab, tab + 1);
    }
  };

  moveLeft = () => {
    const { fields } = this.props;
    const { tab } = this.state;
    if (tab > 0) {
      fields.swap(tab, tab - 1);
    }
  };

  delete = () => {
    const { tab } = this.state;
    const { fields } = this.props;
    fields.remove(tab);
  };

  add = () => {
    const { fields } = this.props;
    fields.push();
  };

  render() {
    const {
      classes,
      fields,
      label,
      helperText,
      fullWidth,
      ...props
    } = this.props;
    return (
      <FormControl fullWidth={fullWidth} {...props}>
        {label && <FormLabel>{label}</FormLabel>}
        <div className={classes.root}>
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            {fields.map((field, i) => (
              <Tab
                key={i}
                label={
                  <Field
                    name={`${field}.fileName`}
                    label="Name"
                    component={TextField}
                  />
                }
              />
            ))}
          </Tabs>
        </div>
        {fields.get(this.state.tab) ? (
          <Field
            fullWidth
            margin="none"
            name={`${fields.name}[${this.state.tab}].source`}
            component={CodeField}
          />
        ) : (
          <div className={classes.placeholder}>
            <Trans>You need to add a file first.</Trans>
          </div>
        )}
        <div>
          <Button onClick={this.add}>Add</Button>
          <Button onClick={this.delete}>Remove</Button>
          <Button onClick={this.moveLeft}>Move Left</Button>
          <Button onClick={this.moveRight}>Move Right</Button>
        </div>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(CodeFieldArray);
