import {
  addNotification,
  removeNotification,
  clearNotifications
} from '../../../src/redux/notifications/actions';

describe('Notifications actions', () => {
  it('should create add notification action', () => {
    const notification = {
      message: 'Hi'
    };
    expect(addNotification(notification)).toMatchSnapshot();
  });

  it('should create remove notification action', () => {
    expect(removeNotification()).toMatchSnapshot();
  });

  it('should create clear notifications action', () => {
    expect(clearNotifications()).toMatchSnapshot();
  });
});
