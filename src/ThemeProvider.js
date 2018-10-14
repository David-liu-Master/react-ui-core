import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './style/theme';
import customTheme from './style/theme.custom';
import { getTheme } from './redux/theme/selectors';

export class ThemeProvider extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <MuiThemeProvider theme={customTheme(theme.primary, theme.secondary)}>
        {children}
      </MuiThemeProvider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired
  })
};

ThemeProvider.defaultProps = {
  theme: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main
  }
};

const mapStateToProps = state => ({
  theme: getTheme(state)
});

export default connect(
  mapStateToProps,
  null
)(ThemeProvider);
