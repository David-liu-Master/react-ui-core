import React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/CodeBlock.fixture';

const { mount, getWrapper, setProps } = createTestContext({
  fixture: fixture[0]
});

beforeEach(mount);

describe('<CodeBlock />', () => {
  it('renders', () => {
    expect(getWrapper().find('pre')).toHaveLength(1);
  });
});
