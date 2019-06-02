import React from 'react';
import { storiesOf } from '@storybook/react';

import DrawerSection from '../src/DrawerSection';

storiesOf('DrawerSection', module).add('normal', () => (
  <DrawerSection
    label="Section Label"
    links={[
      {
        label: 'Link 1',
        icon: 'start'
      }
    ]}
  />
));
