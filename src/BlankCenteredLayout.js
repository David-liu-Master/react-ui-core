import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    overflowX: 'scroll',
    backgroundColor: theme.palette.primary.main
  }
});

class BlankCenteredLayout extends React.Component {
  render() {
    const { classes, children } = this.props;
    return <div className={classes.container}>{children}</div>;
  }
}

BlankCenteredLayout.propTypes = {
  children: PropTypes.node
};

export default withStyles(styles)(BlankCenteredLayout);
