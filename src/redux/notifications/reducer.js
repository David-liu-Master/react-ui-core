import produce from 'immer';

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from './constants';

const initialState = [];

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_NOTIFICATION:
        draft.push(action.payload.notification);
        break;
      case REMOVE_NOTIFICATION:
        draft.shift();
        break;
      case CLEAR_NOTIFICATIONS:
        return initialState;
    }
  });
