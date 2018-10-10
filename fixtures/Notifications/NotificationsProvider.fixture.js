import React from 'react';

import NotificationsProvider from '../../src/Notifications/NotificationsProvider';
import DispatchNotificationButton from './DispatchNotificationButton';

export default [
  {
    component: props => (
      <div>
        <DispatchNotificationButton notification={props.notification} />
        <NotificationsProvider />
      </div>
    ),
    props: {
      notification: {
        message: 'alert!'
      }
    },
    reduxState: {
      notifications: [{ message: 'First and only Message' }]
    }
  }
];
