import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    borderRadius: `0 0 ${theme.shape.borderRadius}px ${
      theme.shape.borderRadius
    }px`,
    padding: theme.spacing(2)
  }
});

class CardButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { children, classes, onClick, ...props } = this.props;
    return (
      <Button
        onClick={onClick}
        fullWidth
        className={classes.button}
        variant="contained"
        color="primary"
        {...props}
      >
        {children}
      </Button>
    );
  }
}

export default withStyles(styles)(CardButton);
