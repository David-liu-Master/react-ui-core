const de = require('./de/messages.js');
const en = require('./en/messages.js');

export const mergeLocale = (l1, l2) => {
  const locale = {
    languageData: Object.assign({}, l1.languageData, l2.languageData),
    messages: Object.assign({}, l1.messages, l2.messages)
  };
  return locale;
};

export const locale = {
  de,
  en
};

export default locale;
