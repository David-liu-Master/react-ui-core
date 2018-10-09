import React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/MarkdownRenderer.fixture';

jest.mock('highlight.js/styles/github.css', () => {});

const { mount, getWrapper, setProps } = createTestContext({
  fixture: fixture[0]
});

beforeEach(mount);

describe('<MarkdownRenderer />', () => {
  it('renders', () => {
    expect(getWrapper().find('pre')).toHaveLength(1);
  });
});
