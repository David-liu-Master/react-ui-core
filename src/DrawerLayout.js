import React from 'react';
import PropTypes from 'prop-types';

import Drawer from './Drawer';
import LogoAppBar from './LogoAppBar';
import Main from './Main';

class DrawerLayout extends React.Component {
  render() {
    const { drawer, appBar, ...props } = this.props;
    return (
      <div>
        <LogoAppBar {...appBar} />
        <Drawer {...drawer} />
        <Main {...props} />
      </div>
    );
  }
}

DrawerLayout.propTypes = {
  drawer: PropTypes.shape(Drawer.propTypes),
  appBar: PropTypes.shape(LogoAppBar.propTypes)
};

export default DrawerLayout;
