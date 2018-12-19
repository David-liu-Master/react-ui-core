import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit
    }
  }
});

class FormSectionHeader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    caption: PropTypes.string
  };

  static defaultProps = {
    caption: null
  };

  render() {
    const { classes, caption, ...props } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="h6" component="div" {...props} />
        {caption && <Typography variant="caption">{caption}</Typography>}
      </div>
    );
  }
}

export default withStyles(styles)(FormSectionHeader);
