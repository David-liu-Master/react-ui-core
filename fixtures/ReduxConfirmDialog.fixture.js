import React from 'react';
import ReduxConfirmDialog from '../src/ReduxConfirmDialog';

export default [
  {
    component: ReduxConfirmDialog,
    props: {
      id: 'confirm',
      title: 'Confirm Dialog',
      content: <b>Test</b>
    },
    reduxState: {
      core: {
        dialog: {
          confirm: true
        }
      }
    }
  }
];
