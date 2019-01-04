import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  card: {
    display: 'flex',
    flexDirection: 'column'
  }
});

class Card extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  render() {
    const { classes, ...props } = this.props;
    return <Paper className={classes.card} {...props} />;
  }
}

export default withStyles(styles)(Card);
