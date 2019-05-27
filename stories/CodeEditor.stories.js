import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import CodeEditor from '../src/CodeEditor';

storiesOf('CodeEditor', module)
  .addDecorator(withKnobs)
  .add('java', () => (
    <CodeEditor
      mode="java"
      value="public class Car {}"
      showPrintMargin={boolean('showPrintMargin', false)}
      fontSize={number('fontSize', 14)}
    />
  ));
