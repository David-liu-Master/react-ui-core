import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from './constants';

export function addNotification(notification) {
  return {
    type: ADD_NOTIFICATION,
    payload: {
      notification
    }
  };
}

export function removeNotification() {
  return {
    type: REMOVE_NOTIFICATION
  };
}

export function clearNotifications() {
  return {
    type: CLEAR_NOTIFICATIONS
  };
}
