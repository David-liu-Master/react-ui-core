import React from 'react';

import { I18nProvider } from '../I18nProvider';
import olocale from '../locale';

const withI18nProvider = (language = 'en', locales = olocale) => story => (
  <I18nProvider language={language} locales={[locales]}>
    {story()}
  </I18nProvider>
);

export default withI18nProvider;
