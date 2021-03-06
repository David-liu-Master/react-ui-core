import { getTheme } from '../../../src/redux/theme/selectors';

const mockState = {
  core: {
    theme: {
      primary: '#000',
      secondary: '#FFF'
    }
  }
};

describe('theme selectors', () => {
  it('should select theme', () => {
    const newState = getTheme(mockState);
    expect(newState).toEqual(mockState.core.theme);
  });
});
