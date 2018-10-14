import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import theme from './style/theme';

const styles = theme => ({
  form: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: theme.spacing.unit * 2
  }
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordRepeat: '',
      email: '',
      username: '',
      isRegistering: false
    };
  }
  handleSubmit = () => {
    e.preventDefault();
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.currentTarget.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.currentTarget.value
    });
  };

  handlePasswordRepeatChange = e => {
    this.setState({
      passwordRepeat: e.currentTarget.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.currentTarget.value
    });
  };

  handleRegister = () => {
    const {
      username,
      password,
      passwordRepeat,
      email,
      isRegistering
    } = this.state;
    const { onRegister } = this.props;

    if (
      isRegistering &&
      password === passwordRepeat &&
      email !== '' &&
      username !== '' &&
      password !== ''
    ) {
      onRegister(username, password, email);
    } else if (!isRegistering) {
      this.setState({
        isRegistering: true
      });
    }
  };

  handleLogin = () => {
    const { username, password, isRegistering } = this.state;
    const { onLogin } = this.props;

    if (!isRegistering && username !== '' && password !== '') {
      onLogin(username, password);
    } else {
      this.setState({
        isRegistering: false
      });
    }
  };

  render() {
    const {
      username,
      password,
      passwordRepeat,
      email,
      isRegistering
    } = this.state;
    const { classes, title, status } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <Typography variant="headline">{title}</Typography>
        <TextField
          variant="outlined"
          name="username"
          label={<Trans id="openpatch.ui-core.username">Username</Trans>}
          disabled={status === 'sending'}
          margin="normal"
          error={status === 'failed' || username === ''}
          onChange={this.handleUsernameChange}
          value={username}
        />
        {isRegistering && (
          <TextField
            variant="outlined"
            name="email"
            label={<Trans id="openpatch.ui-core.email">E-Mail</Trans>}
            disabled={status === 'sending'}
            margin="normal"
            error={status === 'failed' || email === ''}
            onChange={this.handleEmailChange}
            value={email}
          />
        )}
        <TextField
          variant="outlined"
          name="password"
          type="password"
          disabled={status === 'sending'}
          label={<Trans id="openpatch.ui-core.password">Password</Trans>}
          margin="normal"
          error={status === 'failed' || password === ''}
          onChange={this.handlePasswordChange}
          value={password}
        />
        {isRegistering && (
          <TextField
            variant="outlined"
            name="password"
            type="password"
            disabled={status === 'sending'}
            label={
              <Trans id="openpatch.ui-core.repeatPassword">
                Repeat Password
              </Trans>
            }
            margin="normal"
            error={passwordRepeat !== password}
            onChange={this.handlePasswordRepeatChange}
            value={passwordRepeat}
          />
        )}
        <div className={classes.buttons}>
          <Button
            variant="raised"
            disabled={status === 'sending'}
            color={!isRegistering ? 'primary' : 'secondary'}
            onClick={this.handleRegister}
          >
            <Trans id="openpatch.ui-core.register">Register</Trans>
          </Button>
          <Button
            variant="raised"
            disabled={status === 'sending'}
            color={isRegistering ? 'primary' : 'secondary'}
            onClick={this.handleLogin}
          >
            <Trans id="openpatch.ui-core.login">Login</Trans>
          </Button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  title: PropTypes.node,
  status: PropTypes.oneOf(['failed', 'sending', 'normal'])
};

LoginForm.defaultProps = {
  onLogin: () => {},
  onRegister: () => {},
  title: <theme.Logo inverted style={{ transform: 'scale(1.4)' }} />,
  status: 'normal'
};

export default withStyles(styles)(LoginForm);
