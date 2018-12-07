import { INIT, OPEN, CANCEL, CONFIRM } from './constants';

export function init(dialogId) {
  return {
    type: INIT,
    payload: {
      dialogId
    }
  };
}

export function open(dialogId) {
  return {
    type: OPEN,
    payload: {
      dialogId
    }
  };
}

export function confirm(dialogId) {
  return {
    type: CONFIRM,
    payload: {
      dialogId
    }
  };
}

export function cancel(dialogId) {
  return {
    type: CANCEL,
    payload: {
      dialogId
    }
  };
}
