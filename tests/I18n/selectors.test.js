import { getLanguage } from '../../src/I18n/selectors';

const mockState = {
  i18n: {
    language: 'de',
    locales: []
  },
  otherThings: {}
};

describe('I18n selectors', () => {
  it('should select language', () => {
    expect(getLanguage(mockState)).toBe('de');
  });
});
