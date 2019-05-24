import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  }
});

class CardContent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ])
  };

  render() {
    const { classes, children } = this.props;
    return <div className={classes.content}>{children}</div>;
  }
}

export default withStyles(styles)(CardContent);
