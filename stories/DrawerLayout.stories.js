import React from 'react';
import { storiesOf } from '@storybook/react';

import withReduxProvider from '../src/storybookProvider/withReduxProvider';
import DrawerLayout from '../src/DrawerLayout';

storiesOf('DrawerLayout', module)
  .addDecorator(withReduxProvider())
  .add('persistent', () => <DrawerLayout />)
  .add('temporary', () => <DrawerLayout drawer={{ variant: 'temporary' }} />);
