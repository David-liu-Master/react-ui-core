import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { addNotification } from '../../src/Notifications/actions';

class DispatchNotificationButton extends React.Component {
  render() {
    const { addNotification, notification } = this.props;
    return (
      <Button onClick={() => addNotification(notification)}>
        Dispatch Notification
      </Button>
    );
  }
}

DispatchNotificationButton.propTypes = {
  notification: PropTypes.object
};

DispatchNotificationButton.defaultProps = {
  notification: {
    message: 'another notification'
  }
};

const mapDispatchToProps = dispatch => ({
  addNotification: notification => dispatch(addNotification(notification))
});

export default connect(
  null,
  mapDispatchToProps
)(DispatchNotificationButton);
