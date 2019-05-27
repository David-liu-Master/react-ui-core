import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Checkbox from '../src/Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <Checkbox
      input={{ value: boolean('value', false), onChange: action('clicked') }}
      label="Checkbox"
      meta={{}}
    />
  ));
