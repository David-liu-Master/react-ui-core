import produce from 'immer';

import { CHANGE_NOTE, CHANGE_RESPONSE } from './constants';

const initalState = { responses: {}, note: '' };

export default (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NOTE:
        draft.note = action.payload.note;
        break;
      case CHANGE_RESPONSE:
        draft.responses[action.payload.id] = action.payload.response;
        break;
    }
  });
