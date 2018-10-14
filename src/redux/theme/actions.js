import { CHANGE_THEME, RESET_THEME } from './constants';

export function changeTheme(primary, secondary) {
  return {
    type: CHANGE_THEME,
    payload: {
      primary,
      secondary
    }
  };
}

export function resetTheme() {
  return {
    type: RESET_THEME
  };
}
