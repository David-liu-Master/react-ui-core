import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(3)
  }
});

class FormHeader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, ...props } = this.props;
    return <Typography variant="h5" className={classes.container} {...props} />;
  }
}

export default withStyles(styles)(FormHeader);
