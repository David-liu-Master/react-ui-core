import React from 'react';

import NotificationsProvider from '../NotificationsProvider';

const withNotificationsProvider = story => (
  <React.Fragment>
    {story()}
    <NotificationsProvider />
  </React.Fragment>
);

export default withNotificationsProvider;
