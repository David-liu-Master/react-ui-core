import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './style/theme';

const styles = theme => ({
  banner: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.grey[200],
    padding: theme.spacing(3)
  },
  title: {
    fontSize: theme.fontSize.units[3]
  }
});

class CardBanner extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string
  };
  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.banner}>
        <theme.Logo inverted style={{ transform: 'scale(1.2)' }} />
        {title && (
          <Typography className={classes.title} variant="h1">
            {title}
          </Typography>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(CardBanner);
