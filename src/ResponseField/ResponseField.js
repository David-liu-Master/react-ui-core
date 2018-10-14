import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core/styles';
import Choice from './Choice';
import Matrix from './Matrix';
import Text from './Text';
import Select from './Select';

const styles = theme => ({
  header: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary[100]
  },
  body: {
    padding: theme.spacing.unit * 2
  }
});

class ResponseField extends React.Component {
  render() {
    const { classes, type, label, ...props } = this.props;
    let field = <div />;
    if (type === 'multiple-choice') {
      field = <Choice {...props} multiple={true} />;
    } else if (type === 'single-choice') {
      field = <Choice {...props} />;
    } else if (type === 'matrix') {
      field = <Matrix {...props} />;
    } else if (type === 'text') {
      field = <Text {...props} />;
    } else if (type === 'select') {
      field = <Select {...props} />;
    }

    return (
      <div>
        <div className={classes.header}>
          <Typography>{label}</Typography>
        </div>
        <div className={classes.body}>{field}</div>
      </div>
    );
  }
}
ResponseField.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

ResponseField.defaultProps = {
  label: '',
  onChange: () => {}
};

export default withStyles(styles)(ResponseField);
