import { getNotifications } from '../../src/Notifications/selectors';

const mockState = {
  notifications: [],
  otherThings: {
    stuff: 'Hi'
  }
};

describe('Notifications selectors', () => {
  it('should select notifications', () => {
    expect(getNotifications(mockState)).toEqual(mockState.notifications);
  });
});
