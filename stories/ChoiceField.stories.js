import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ChoiceField from '../src/ChoiceField';

const options = ['Option 1', 'Option 2', 'Option 3'];

storiesOf('ChoiceField', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
  <ChoiceField
    input={{
      value: {
        1: true
      },
      onChange: action('change')
    }}
    meta={{}}
    options={options}
    allowMultiple={boolean('allowMultiple', false)}
  />
))
  .add('error', () => (
  <ChoiceField
    label="Choice Field"
    required={boolean('required', false)}
    input={{
      value: {
        1: true
      },
      onChange: action('change')
    }}
    meta={{error: true, touched: true}}
    options={options}
    allowMultiple={boolean('allowMultiple', false)}
  />
));
