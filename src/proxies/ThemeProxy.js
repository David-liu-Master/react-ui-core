import React from 'react';

import { ThemeProvider } from '../ThemeProvider';

export const createThemeProxy = () => {
  class ThemeProxy extends React.Component {
    render() {
      const { nextProxy } = this.props;
      const { value: NextProxy, next } = nextProxy;

      return (
        <ThemeProvider>
          <NextProxy {...this.props} nextProxy={next()} />
        </ThemeProvider>
      );
    }
  }

  return ThemeProxy;
};

export default createThemeProxy();
