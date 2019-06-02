import { configure, addDecorator } from '@storybook/react';

import withThemeProvider from '../src/storybookProvider/withThemeProvider';
import withI18nProvider from '../src/storybookProvider/withI18nProvider';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withI18nProvider());
addDecorator(withThemeProvider);
