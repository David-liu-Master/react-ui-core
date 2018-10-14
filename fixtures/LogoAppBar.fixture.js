import React from 'react';

import LogoAppBar from '../src/LogoAppBar';

export default [
  {
    component: LogoAppBar,
    reduxState: {}
  },
  {
    component: LogoAppBar,
    reduxState: {}
  },
  {
    component: LogoAppBar,
    props: {
      middle: <div>Search</div>
    },
    reduxState: {}
  }
];
