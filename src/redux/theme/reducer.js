import produce from 'immer';

import { CHANGE_THEME, RESET_THEME } from './constants';

import theme from '../../style/theme';

const initialState = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_THEME:
        draft.primary = action.payload.primary;
        draft.secondary = action.payload.secondary;
        break;
      case RESET_THEME:
        return initialState;
    }
  });
