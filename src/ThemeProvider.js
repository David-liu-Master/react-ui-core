import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './style/theme';
import customTheme from './style/theme.custom';
import { getTheme } from './redux/theme/selectors';

export class ThemeProvider extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <MuiThemeProvider theme={customTheme(theme.primary, theme.secondary)}>
          {children}
        </MuiThemeProvider>
      </React.Fragment>
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
