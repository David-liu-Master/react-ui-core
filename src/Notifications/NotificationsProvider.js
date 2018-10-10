import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Notification from './Notification';
import { removeNotification, clearNotifications } from './actions';
import { getNotifications } from './selectors';

export class NotificationsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transition: undefined,
      open: false
    };
  }
  componentWillMount() {
    // clear notifications
    const { clearNotifications } = this.props;
    clearNotifications();
  }

  componentWillUpdate = nextProps => {
    const { notifications } = this.props;
    if (notifications.length > 0 && !this.state.open) {
      this.setState({
        open: true
      });
    }
  };

  onClose = transition => {
    this.setState({
      open: false,
      transition
    });
  };

  onExited = () => {
    const { removeNotification } = this.props;
    removeNotification();
  };

  render() {
    const { children, notifications } = this.props;
    let activeNotification = notifications[0];
    if (!activeNotification) {
      return null;
    }
    return (
      <Notification
        {...activeNotification}
        open={this.state.open}
        transition={this.state.transition}
        onExited={this.onExited}
        onClose={this.onClose}
      />
    );
  }
}

NotificationsProvider.propTypes = {
  removeNotification: PropTypes.func.isRequired,
  clearNotifications: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      ...Notification.propTypes
    })
  ).isRequired
};

const mapStateToProps = state => ({
  notifications: getNotifications(state)
});

const mapDispatchToProps = dispatch => ({
  removeNotification: () => dispatch(removeNotification()),
  clearNotifications: () => dispatch(clearNotifications())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsProvider);
