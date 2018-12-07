import produce from 'immer';

import { INIT, OPEN, CONFIRM, CANCEL } from './constants';

const initialState = {};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INIT:
        if (!(action.payload.dialogId in draft)) {
          draft[action.payload.dialogId] = false;
        }
        break;
      case OPEN:
        draft[action.payload.dialogId] = true;
        break;
      case CANCEL:
      case CONFIRM:
        draft[action.payload.dialogId] = false;
        break;
    }
  });
