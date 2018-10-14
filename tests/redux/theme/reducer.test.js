import reducer from '../../../src/redux/theme/reducer';
import { resetTheme, changeTheme } from '../../../src/redux/theme/actions';
import theme from '../../../src/style/theme';

const mockState = {
  primary: '#000',
  secondary: '#FFF'
};

describe('theme reducer', () => {
  it('should reduce reset theme', () => {
    expect(reducer(mockState, resetTheme())).toEqual({
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main
    });
  });

  it('should reduce change theme', () => {
    const primary = '#F00';
    const secondary = '#00F';
    expect(reducer(mockState, changeTheme(primary, secondary))).toEqual({
      primary,
      secondary
    });
  });
});
