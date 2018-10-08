import produce from 'immer';
import { CHANGE_LANGUAGE } from './constants';

const initialState = {
  language: 'en'
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LANGUAGE:
        draft.language = action.payload.language;
    }
  });
