import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setupI18n } from '@lingui/core';
import { I18nProvider as I18P } from '@lingui/react';
import _merge from 'lodash/merge';

import { getLanguage } from './redux/i18n/selectors';

export const mergeLocales = locales => {
  let locale = {};
  locales.forEach(otherLocale => {
    locale = _merge(locale, otherLocale);
  });
  return locale;
};

export const i18n = setupI18n();

export class I18nProvider extends React.Component {
  render() {
    const { children, language, locales } = this.props;
    const catalogs = mergeLocales(locales);
    i18n.load(catalogs);
    i18n.activate(language);
    return (
      <I18P language={language} catalogs={catalogs}>
        {children}
      </I18P>
    );
  }
}

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  language: PropTypes.string,
  locales: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        messages: PropTypes.object.isRequired,
        languageData: PropTypes.object.isRequired
      })
    )
  )
};

I18nProvider.defaultProps = {
  language: 'en',
  locales: []
};

const mapStateToProps = state => ({
  language: getLanguage(state)
});

export default connect(
  mapStateToProps,
  null
)(I18nProvider);
