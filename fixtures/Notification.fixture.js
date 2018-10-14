import Notification from '../src/Notification';

export default [
  {
    component: Notification,
    name: 'Only Message',
    props: {
      message: 'Hi!',
      open: true
    }
  },
  {
    component: Notification,
    name: 'With Action',
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
  },
  {
    component: Notification,
    name: 'Warning',
    props: {
      message: 'Hi!',
      variant: 'warning',
      open: true
    }
  },
  {
    component: Notification,
    name: 'Info',
    props: {
      message: 'Hi!',
      variant: 'info',
      open: true
    }
  },
  {
    component: Notification,
    name: 'Success',
    props: {
      message: 'Hi!',
      variant: 'success',
      open: true
    }
  },
  {
    component: Notification,
    name: 'Error',
    props: {
      message: 'Hi!',
      variant: 'error',
      open: true
    }
  }
];
