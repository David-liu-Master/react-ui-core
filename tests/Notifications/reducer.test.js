import reducer from '../../src/Notifications/reducer';
import {
  addNotification,
  removeNotification,
  clearNotifications
} from '../../src/Notifications/actions';

const mockState = [{ message: 'Hi' }];

describe('Notifications reducer', () => {
  it('should return initalState', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should reduce add notifications', () => {
    const notification = {
      message: 'Another Hi'
    };
    const newState = reducer(mockState, addNotification(notification));
    expect(newState).toHaveLength(2);
  });

  it('should reduce remove notifications', () => {
    const oldLength = mockState.length;
    const newState = reducer(mockState, removeNotification());
    expect(newState).toHaveLength(oldLength - 1);
  });

  it('should reduce clear notifications', () => {
    const newState = reducer(mockState, clearNotifications());
    expect(newState).toHaveLength(0);
  });
});
