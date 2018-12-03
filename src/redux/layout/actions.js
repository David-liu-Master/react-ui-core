import {
  TOGGLE_DRAWER,
  REMOTE_SECTION_REQUEST,
  REMOTE_SECTION_ROLLBACK,
  REMOTE_SECTION_COMMIT
} from './constants';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  };
}

export function fetchRemoteSection(url) {
  return dispatch => {
    dispatch(fetchRemoteSectionRequest());
    fetch(url, {
      method: 'GET',
      cors: 'no-cors'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        return dispatch(fetchRemoteSectionCommit(url, json));
      })
      .catch(function(err) {
        return dispatch(fetchRemoteSectionRollback());
      });
  };
}

function fetchRemoteSectionRequest() {
  return {
    type: REMOTE_SECTION_REQUEST
  };
}

function fetchRemoteSectionCommit(url, sections) {
  return {
    type: REMOTE_SECTION_COMMIT,
    payload: {
      url,
      sections
    }
  };
}

function fetchRemoteSectionRollback() {
  return {
    type: REMOTE_SECTION_ROLLBACK
  };
}
