import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DateField from '../src/DateField';

storiesOf('DateField', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <DateField
      label="Date Field"
      input={{
        value: '2018-10-05',
        onChange: action('change')
      }}
      meta={{}}
    />
  ))
  .add('error', () => (
    <DateField
      label="Date Field"
      required={boolean('required', false)}
      input={{
        onChange: action('change')
      }}
      meta={{ error: true, touched: true }}
    />
  ));
