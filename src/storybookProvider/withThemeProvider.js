import React from 'react';

import { ThemeProvider } from '../ThemeProvider';

const withThemeProvider = story => <ThemeProvider>{story()}</ThemeProvider>;

export default withThemeProvider;
