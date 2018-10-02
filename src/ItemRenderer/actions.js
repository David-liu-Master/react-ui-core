import { CHANGE_NOTE, CHANGE_RESPONSE } from './constants';

export const changeNote = note => ({
  type: CHANGE_NOTE,
  payload: {
    note
  }
});

export const changeResponse = (response, id) => ({
  type: CHANGE_RESPONSE,
  payload: {
    response,
    id
  }
});
