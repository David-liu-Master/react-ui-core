import reducer from '../../../src/redux/i18n/reducer';
import { changeLanguage } from '../../../src/redux/i18n/actions';

const mockState = {
  language: 'en',
  otherThings: {
    test: 'test'
  }
};

describe('I18n reducer', () => {
  it('should change language', () => {
    const newState = reducer(mockState, changeLanguage('de'));
    expect(newState.language).toBe('de');
    expect(newState.otherThings).toEqual(newState.otherThings);
  });
});
