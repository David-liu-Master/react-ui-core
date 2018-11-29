import { getNotifications } from '../../../src/redux/notifications/selectors';

const mockState = {
  core: {
    notifications: []
  },
  otherThings: {
    stuff: 'Hi'
  }
};

describe('Notifications selectors', () => {
  it('should select notifications', () => {
    expect(getNotifications(mockState)).toEqual(mockState.core.notifications);
  });
});
