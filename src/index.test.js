import React from 'react';
import Index from './index';
import createComponentWithI18n from '../utils/createComponentWithI18n';

test('Index', () => {
  const component = createComponentWithI18n(<Index />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
