import React from 'react';
import { storiesOf } from '@storybook/react';
import withReduxProvider from '../src/storybookProvider/withReduxProvider';

import LanguageSelect from '../src/LanguageSelect';

storiesOf('LanguageSelect', module)
  .addDecorator(withReduxProvider())
  .add('normal', () => <LanguageSelect />);
