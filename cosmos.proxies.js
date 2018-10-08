import React from 'react';

import { I18nProvider } from './src/I18n/I18nProvider';
import olocale from './src/locale';

const createI18nProxy = ({ locale }) => {
  class I18nProxy extends React.Component {
    render() {
      const {
        nextProxy,
        fixture: { language = 'en' }
      } = this.props;
      const { value: NextProxy, next } = nextProxy;

      return (
        <I18nProvider language={language} key={language} locales={[locale]}>
          <NextProxy {...this.props} nextProxy={next()} />
        </I18nProvider>
      );
    }
  }

  return I18nProxy;
};

export default [createI18nProxy({ locale: olocale })];
