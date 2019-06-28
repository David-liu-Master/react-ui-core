import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  main: {
    padding: theme.spacing(3)
  }
});

class Main extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    noDrawerSpacing: PropTypes.bool,
    children: PropTypes.node,
    padded: PropTypes.bool
  };

  static defaultProps = {
    noDrawerSpacing: false
  };

  render() {
    const { noDrawerSpacing, padded, classes, children, ...props } = this.props;
    return (
      <Typography
        className={padded ? classes.main : null}
        component="main"
        {...props}
      >
        {!noDrawerSpacing && <div className={classes.toolbar} />}
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(Main);
