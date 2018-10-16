import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  normal: {},
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  normal: null
};

class Notification extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      actions,
      message,
      onClose,
      variant,
      ...props
    } = this.props;
    const Icon = variantIcon[variant];
    return (
      <Snackbar {...props} onClose={onClose}>
        <SnackbarContent
          className={classNames(classes[variant], className)}
          message={
            <span className={classes.message}>
              {Icon && (
                <Icon
                  className={classNames(classes.icon, classes.iconVariant)}
                />
              )}
              {message}
            </span>
          }
          action={actions.map(action => (
            <Button
              size="small"
              color="secondary"
              key={action.label}
              onClick={action.callback}
            >
              {action.label}
            </Button>
          ))}
        />
      </Snackbar>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      callback: PropTypes.func.isRequired
    })
  ),
  variant: PropTypes.oneOf(['error', 'warning', 'info', 'success', 'normal']),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'center', 'bottom'])
  }),
  key: PropTypes.string
};

Notification.defaultProps = {
  actions: [],
  key: 'notifcations-provider',
  variant: 'normal',
  open: false,
  onClose: () => {},
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  }
};

export default withStyles(styles)(Notification);