import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ConfirmDialog from '../src/ConfirmDialog';

storiesOf('ConfirmDialog', module)
  .addDecorator(withKnobs)
  .add('open', () => (
    <ConfirmDialog
      open={boolean('open', true)}
      onConfirm={action('confirm')}
      title="Title"
      content="Content"
      onCancel={action('cancel')}
      fullScreen={boolean('fullScreen', false)}
      disableBackdropClick={boolean('disableBackdropClick', false)}
    />
  ))
  .add('fullScreen', () => (
    <ConfirmDialog
      open={boolean('open', true)}
      onConfirm={action('confirm')}
      title="Title"
      content="Content"
      onCancel={action('cancel')}
      fullScreen={boolean('fullScreen', true)}
      disableBackdropClick={boolean('disableBackdropClick', false)}
    />
  ));
