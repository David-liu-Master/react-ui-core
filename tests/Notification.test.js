import React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Notification.fixture';

const { mount, getWrapper, setProps } = createTestContext({
  fixture: fixture[1]
});

beforeEach(mount);

describe('<Notification />', () => {
  it('renders', () => {
    expect(getWrapper().find('button')).toHaveLength(2);
  });

  it('should register click on action', () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();
    setProps({
      actions: [
        {
          label: 'action 1',
          callback: mockCallback1
        },
        {
          label: 'action 2',
          callback: mockCallback2
        }
      ]
    });
    expect(mockCallback1.mock.calls.length).toBe(0);
    expect(mockCallback2.mock.calls.length).toBe(0);

    getWrapper()
      .find('button')
      .first()
      .simulate('click');
    expect(mockCallback1.mock.calls.length).toBe(1);
    expect(mockCallback2.mock.calls.length).toBe(0);

    getWrapper()
      .find('button')
      .last()
      .simulate('click');
    expect(mockCallback1.mock.calls.length).toBe(1);
    expect(mockCallback2.mock.calls.length).toBe(1);
  });
});
