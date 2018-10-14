import { getLayout, getDrawerOpen } from '../../../src/redux/layout/selectors';

const mockState = {
  layout: {
    drawerOpen: false
  },
  otherThings: {}
};

describe('layout selectors', () => {
  it('should select layout', () => {
    expect(getLayout(mockState)).toEqual({
      drawerOpen: false
    });
  });

  it('should select drawerOpen', () => {
    expect(getDrawerOpen(mockState)).toBe(false);
  });
});
