import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import { toggleDrawer } from './redux/layout/actions';
import { getAppBarTitle } from './redux/layout/selectors';

const styles = theme => ({
  title: {
    display: 'inline-flex',
    marginLeft: theme.spacing.unit * 2,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold'
  },
  middle: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    display: 'flex',
    justifyContent: 'center'
  },
  appBar: {
    ...theme.mixins.toolbar,
    zIndex: 1250
  }
});

export class AppBar extends React.Component {
  render() {
    const { classes, toggleDrawer, middle, title, right } = this.props;
    return (
      <MuiAppBar className={classes.appBar} position="absolute">
        <Toolbar>
          <IconButton onClick={toggleDrawer} color="inherit">
            <Icon>menu</Icon>
          </IconButton>
          <div className={classes.title}>{title}</div>
          <div className={classes.middle}>{middle}</div>
          {right}
        </Toolbar>
      </MuiAppBar>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  title: PropTypes.node,
  middle: PropTypes.node,
  toggleDrawer: PropTypes.func,
  right: PropTypes.node
};

AppBar.defaultProps = {
  toggleDrawer: () => {}
};

const mapStateToProps = state => ({
  title: getAppBarTitle(state)
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AppBar));
