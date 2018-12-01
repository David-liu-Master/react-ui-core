import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from './Drawer';
import LogoAppBar from './LogoAppBar';

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

class DrawerLayout extends React.Component {
  render() {
    const { classes, drawer, appBar, children } = this.props;
    return (
      <div>
        <LogoAppBar {...appBar} />
        <Drawer {...drawer} />
        <main>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

DrawerLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  drawer: PropTypes.shape(Drawer.propTypes),
  appBar: PropTypes.shape(LogoAppBar.propTypes)
};

export default withStyles(styles)(DrawerLayout);
