import React from 'react';
import { storiesOf } from '@storybook/react';

import withReduxProvider from '../src/storybookProvider/withReduxProvider';
import AppBar from '../src/AppBar';

storiesOf('AppBar', module)
  .addDecorator(
    withReduxProvider({
      core: {
        layout: {
          appBarTitle: 'Home'
        }
      }
    })
  )
  .add('Title', () => <AppBar />);
