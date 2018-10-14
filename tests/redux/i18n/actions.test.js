import { changeLanguage } from '../../../src/redux/i18n/actions';

describe('I18n actions', () => {
  it('should create change language action', () => {
    expect(changeLanguage('en')).toMatchSnapshot();
  });
});
