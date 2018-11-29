import { getLanguage } from '../../../src/redux/i18n/selectors';

const mockState = {
  core: {
    i18n: {
      language: 'de',
      locales: []
    }
  },
  otherThings: {}
};

describe('I18n selectors', () => {
  it('should select language', () => {
    expect(getLanguage(mockState)).toBe('de');
  });
});
