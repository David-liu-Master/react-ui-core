import React from 'react';

import NotificationsProvider from '../NotificationsProvider';

export const createNotificationsProxy = () => {
  class NotificationsProxy extends React.Component {
    render() {
      const { nextProxy } = this.props;
      const { value: NextProxy, next } = nextProxy;

      return (
        <React.Fragment>
          <NextProxy {...this.props} nextProxy={next()} />
          <NotificationsProvider />
        </React.Fragment>
      );
    }
  }

  return NotificationsProxy;
};

export default createNotificationsProxy();
