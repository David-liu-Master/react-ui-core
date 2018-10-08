import Notification from '../../src/Notifications/Notification';

export default [
  {
    component: Notification,
    props: {
      message: 'Hi!',
      open: true
    }
  },
  {
    component: Notification,
    props: {
      message: 'Hi!',
      open: true,
      actions: [
        {
          label: 'Click Me',
          callback: () => console.log('called')
        },
        {
          label: 'No Click Me',
          callback: () => console.log('I am better')
        }
      ]
    }
  }
];
