import { NotificationsProvider } from '../../src/Notifications/NotificationsProvider';

export default [
  {
    component: NotificationsProvider,
    name: 'One Message',
    state: {
      open: true
    },
    props: {
      removeNotification: () => console.log('remove notification'),
      clearNotifications: () => console.log('clear notifications'),
      notifications: [{ message: 'First and only Message' }]
    }
  },
  {
    component: NotificationsProvider,
    name: 'Two Messages',
    state: {
      open: true
    },
    props: {
      removeNotification: () => console.log('remove notification'),
      clearNotifications: () => console.log('clear notifications'),
      notifications: [
        { message: 'First Message' },
        { message: 'Second Message' }
      ]
    }
  }
];
