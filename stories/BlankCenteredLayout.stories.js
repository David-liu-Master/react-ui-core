import React from 'react';
import { storiesOf } from '@storybook/react';

import BlankCenteredLayout from '../src/BlankCenteredLayout';

storiesOf('BlankCenteredLayout', module).add('normal', () => (
  <BlankCenteredLayout>Center</BlankCenteredLayout>
));
