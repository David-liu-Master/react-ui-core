import React from 'react';
import renderer from 'react-test-renderer';
import { I18nProvider } from '@lingui/react';
import locale from '../src/locale';

const createComponentWithI18n = (
  children,
  props = { language: 'en', catalogs: locale }
) => {
  return renderer.create(<I18nProvider {...props}>{children}</I18nProvider>);
};

export default createComponentWithI18n;
