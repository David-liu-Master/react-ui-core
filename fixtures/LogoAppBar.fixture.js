import React from 'react';

import LogoAppBar from '../src/LogoAppBar';

export default [
  {
    component: LogoAppBar,
    reduxState: { core: {} }
  },
  {
    component: LogoAppBar,
    reduxState: { core: {} }
  },
  {
    component: LogoAppBar,
    props: {
      middle: <div>Search</div>
    },
    reduxState: { core: {} }
  }
];
