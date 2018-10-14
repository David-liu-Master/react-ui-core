import reducer from '../../../src/redux/layout/reducer';
import { toggleDrawer } from '../../../src/redux/layout/actions';

const mockState = {
  drawerOpen: true
};

describe('layout reducer', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toEqual({
      drawerOpen: false
    });
  });
  it('should reduce toggleDrawer', () => {
    expect(reducer(undefined, toggleDrawer())).toEqual({
      drawerOpen: true
    });

    expect(reducer(mockState, toggleDrawer())).toEqual({
      drawerOpen: false
    });
  });
});
