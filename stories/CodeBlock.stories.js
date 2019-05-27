import React from 'react';
import { storiesOf } from '@storybook/react';

import CodeBlock from '../src/CodeBlock';

storiesOf('CodeBlock', module).add('java', () => (
  <CodeBlock language="java" value="public class Car {}" />
));
