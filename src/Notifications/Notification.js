import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

class Notification extends React.PureComponent {
  render() {
    const { actions, ...props } = this.props;
    return (
      <Snackbar
        {...props}
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
    );
  }
}

Notification.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      callback: PropTypes.func.isRequired
    })
  ),
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
  open: false,
  onClose: () => {},
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  }
};

export default Notification;
