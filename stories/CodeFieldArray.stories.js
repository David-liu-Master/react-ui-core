import React from 'react';
import { storiesOf } from '@storybook/react';

import withReduxFormProvider from '../src/storybookProvider/withReduxFormProvider';
import { FieldArray } from '../src/redux-form';

import CodeFieldArray from '../src/CodeFieldArray';

storiesOf('CodeFieldArray', module)
  .addDecorator(
    withReduxFormProvider({
      sources: [
        {
          fileName: 'Car.java',
          source: `class Car {
}`
        },
        {
          fileName: 'House.java',
          source: `class House extends Building {
}`
        }
      ]
    })
  )
  .add('normal', () => (
    <FieldArray name="sources" component={CodeFieldArray} />
  ));
