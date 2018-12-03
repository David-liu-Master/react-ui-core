import React from 'react';

import LogoAppBar from '../src/LogoAppBar';
import ResponsiveMenu from '../src/ResponsiveMenu';

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
      middle: <div>Search</div>,
      right: (
        <ResponsiveMenu
          compact={true}
          items={[
            {
              label: 'star',
              icon: 'star',
              onClick: () => console.log('star')
            },
            {
              label: 'delete',
              icon: 'delete',
              onClick: () => console.log('delete')
            },
            {
              label: 'home',
              icon: 'home',
              onClick: () => console.log('home')
            }
          ]}
        />
      )
    },
    reduxState: { core: {} }
  }
];
