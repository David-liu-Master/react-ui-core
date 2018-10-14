import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import LoginForm from './LoginForm';
import Logo from './Logo';

const styles = theme => ({
  container: {
    display: 'inline-block',
    padding: theme.spacing.unit * 4
  }
});

class LoginCard extends React.Component {
  render() {
    const { classes, ...props } = this.props;
    return (
      <Paper className={classes.container}>
        <LoginForm {...props} />
      </Paper>
    );
  }
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
  ...LoginForm.propTypes
};

LoginCard.defaultProps = {
  ...LoginForm.defaultProps
};

export default withStyles(styles)(LoginCard);
