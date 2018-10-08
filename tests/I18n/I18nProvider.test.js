import { mergeLocales } from '../../src/I18n/I18nProvider';

describe('I18nProvider mergeLocales', () => {
  it('should merge locales', () => {
    const locale1 = {
      de: {
        messages: {
          'l1.t1': 't1',
          'l1.t2': 't2'
        },
        languageData: {}
      },
      en: {
        messages: {
          'l1.t1': 'ent1',
          'l1.t2': 'ent2'
        },
        languageData: {}
      }
    };
    const locale2 = {
      de: {
        messages: {
          'l2.t1': 't1',
          'l2.t2': 't2'
        },
        languageData: {}
      },
      en: {
        messages: {
          'l2.t1': 'ent1',
          'l2.t2': 'ent2'
        },
        languageData: {}
      }
    };
    const locale3 = {
      de: {
        messages: {
          'l3.t1': 't1',
          'l3.t2': 't2'
        },
        languageData: {}
      },
      en: {
        messages: {
          'l3.t1': 'ent1',
          'l3.t2': 'ent2'
        },
        languageData: {}
      }
    };
    const locales = [locale1, locale2, locale3];

    const expectedLocales = {
      de: {
        messages: {
          ...locale1.de.messages,
          ...locale2.de.messages,
          ...locale3.de.messages
        },
        languageData: {
          ...locale1.de.languageData,
          ...locale2.de.languageData,
          ...locale3.de.languageData
        }
      },
      en: {
        messages: {
          ...locale1.en.messages,
          ...locale2.en.messages,
          ...locale3.en.messages
        },
        languageData: {
          ...locale1.en.languageData,
          ...locale2.en.languageData,
          ...locale3.en.languageData
        }
      }
    };

    expect(mergeLocales(locales)).toEqual(expectedLocales);
  });
});
