import React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/index.fixture';

const { mount, getWrapper, setProps } = createTestContext({
  fixture
});

beforeEach(mount);

describe('<Index />', () => {
  it('renders on <h2 />', () => {
    expect(getWrapper().find('h2')).toHaveLength(1);
  });

  it('simulates click events', () => {
    const mockOnClick = jest.fn();
    setProps({ onClick: mockOnClick });
    getWrapper()
      .find('button')
      .simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
