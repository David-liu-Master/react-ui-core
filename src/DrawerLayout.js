import React from 'react';
import PropTypes from 'prop-types';

import Drawer from './Drawer';
import LogoAppBar from './LogoAppBar';

class DrawerLayout extends React.Component {
  render() {
    const { drawer, appBar, children } = this.props;
    return (
      <div>
        <LogoAppBar {...appBar} />
        <Drawer {...drawer} />
        {children}
      </div>
    );
  }
}

DrawerLayout.propTypes = {
  drawer: PropTypes.shape(Drawer.propTypes),
  appBar: PropTypes.shape(LogoAppBar.propTypes)
};

export default DrawerLayout;
