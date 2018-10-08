import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { I18nProvider as I18P } from '@lingui/react';
import _merge from 'lodash/merge';

import { getLanguage } from './selectors';

export const mergeLocales = locales => {
  let locale = {};
  locales.forEach(otherLocale => {
    locale = _merge(locale, otherLocale);
  });
  return locale;
};

export class I18nProvider extends React.Component {
  render() {
    const { children, language, locales } = this.props;
    return (
      <I18P language={language} catalogs={mergeLocales(locales)}>
        {children}
      </I18P>
    );
  }
}

I18nProvider.propTypes = {
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
