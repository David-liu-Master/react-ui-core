import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CompactMenu from '../src/CompactMenu';

storiesOf('CompactMenu', module).add('normal', () => (
  <CompactMenu
    items={[
      { label: 'Home', icon: 'home', onClick: action('home') },
      { label: 'Favorite', icon: 'star', onClick: action('star') }
    ]}
  />
));
