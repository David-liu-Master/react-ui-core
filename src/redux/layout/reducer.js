import produce from 'immer';

import {
  TOGGLE_DRAWER,
  CHANGE_APP_BAR_TITLE,
  REMOTE_SECTION_COMMIT,
  REMOTE_SECTION_REQUEST,
  REMOTE_SECTION_ROLLBACK
} from './constants';

const initialState = {
  drawerOpen: false,
  isRequesting: false,
  requestingFailed: false,
  remoteSections: {}
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_DRAWER:
        draft.drawerOpen = !draft.drawerOpen;
        break;
      case CHANGE_APP_BAR_TITLE:
        draft.appBarTitle = action.payload.title;
        break;
      case REMOTE_SECTION_REQUEST:
        draft.isRequesting = true;
        draft.requestingFailed = false;
        break;
      case REMOTE_SECTION_COMMIT:
        draft.remoteSections[action.payload.url] = action.payload.sections;
        break;
      case REMOTE_SECTION_ROLLBACK:
        draft.isRequesting = false;
        draft.requestingFailed = true;
        break;
    }
  });
