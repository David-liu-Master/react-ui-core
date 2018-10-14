import { resetTheme, changeTheme } from '../../../src/redux/theme/actions';

describe('theme actions', () => {
  it('should create reset theme action', () => {
    expect(resetTheme()).toMatchSnapshot();
  });

  it('should create change theme action', () => {
    expect(changeTheme('#000', '#FFF')).toMatchSnapshot();
  });
});
