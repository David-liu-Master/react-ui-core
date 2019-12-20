import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectField from '../src/SelectField';

storiesOf('SelectField', module).add('normal', () => (
  <SelectField
    input={{ value: 1 }}
    meta={{ error: true, touched: true }}
    options={[{ node: <b>Hi</b>, value: 10 }, { node: 'Test', value: 1 }]}
  />
));
