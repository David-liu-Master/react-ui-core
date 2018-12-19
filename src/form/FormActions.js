import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing.unit * 2,
    '& > *': {
      marginLeft: theme.spacing.unit * 2
    }
  }
});

class FormActions extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, ...props } = this.props;
    return <div className={classes.container} {...props} />;
  }
}

export default withStyles(styles)(FormActions);
