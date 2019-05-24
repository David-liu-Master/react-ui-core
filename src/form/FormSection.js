import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
});

class FormSection extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, ...props } = this.props;
    return <div className={classes.container} {...props} />;
  }
}

export default withStyles(styles)(FormSection);
