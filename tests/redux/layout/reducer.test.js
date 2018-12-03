import reducer from '../../../src/redux/layout/reducer';
import { toggleDrawer } from '../../../src/redux/layout/actions';

const mockState = {
  drawerOpen: true
};

describe('layout reducer', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
  it('should reduce toggleDrawer', () => {
    expect(reducer(undefined, toggleDrawer())).toMatchSnapshot();
    expect(reducer(mockState, toggleDrawer())).toEqual({
      drawerOpen: false
    });
  });
});
