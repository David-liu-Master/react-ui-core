import React from 'react';
import { create as renderer } from 'react-test-renderer';
import createTestContext from 'react-cosmos-test/generic';
import fixture from '../fixtures/index.fixture';

const { mount, getWrapper } = createTestContext({ renderer, fixture });

beforeEach(mount);

test('renders index', () => {
  expect(getWrapper().toJSON()).toMatchSnapshot();
});
