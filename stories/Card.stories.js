import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Card from '../src/Card';
import CardBanner from '../src/CardBanner';
import CardContent from '../src/CardContent';
import CardButton from '../src/CardButton';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('CardBanner', () => <CardBanner title={text('title', 'My Banner')} />)
  .add('CardContent', () => (
    <CardContent>{text('content', 'My Content')}</CardContent>
  ))
  .add('CardButton', () => (
    <CardButton onClick={action('clicked')}>Button</CardButton>
  ));
