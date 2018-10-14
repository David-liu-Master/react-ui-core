import produce from 'immer';

import { TOGGLE_DRAWER } from './constants';

const initialState = {
  drawerOpen: false
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_DRAWER:
        draft.drawerOpen = !draft.drawerOpen;
    }
  });
