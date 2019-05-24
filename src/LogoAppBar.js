import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import theme from './style/theme';
import { toggleDrawer } from './redux/layout/actions';

const styles = theme => ({
  logo: {
    display: 'inline-flex',
    marginLeft: theme.spacing(3)
  },
  middle: {
    flexGrow: 1,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  },
  appBar: {
    ...theme.mixins.toolbar,
    zIndex: 1250
  }
});

export class LogoAppBar extends React.Component {
  render() {
    const { classes, toggleDrawer, middle, logo, right } = this.props;
    return (
      <AppBar className={classes.appBar} position="absolute">
        <Toolbar>
          <IconButton onClick={toggleDrawer} color="inherit">
            <Icon>menu</Icon>
          </IconButton>
          <div className={classes.logo}>{logo}</div>
          <div className={classes.middle}>{middle}</div>
          {right}
        </Toolbar>
      </AppBar>
    );
  }
}

LogoAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  logo: PropTypes.node,
  middle: PropTypes.node,
  toggleDrawer: PropTypes.func,
  right: PropTypes.node
};

LogoAppBar.defaultProps = {
  toggleDrawer: () => {},
  logo: <theme.Logo />
};

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(LogoAppBar));
