import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Choice from './Choice';
import Matrix from './Matrix';
import Text from './Text';
import Select from './Select';
import Markdown from '../MarkdownRenderer';

const styles = theme => ({
  header: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center'
  },
  required: {
    margin: theme.spacing(1)
  },
  body: {
    padding: theme.spacing(3)
  },
  hint: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: theme.palette.grey[600],
    backgroundColor: theme.palette.grey[200]
  }
});

class ResponseField extends React.Component {
  render() {
    const {
      classes,
      required,
      type,
      hint,
      publicDescription,
      ...props
    } = this.props;
    let field = <div />;
    if (type === 'choice') {
      field = <Choice {...props} />;
    } else if (type === 'matrix') {
      field = <Matrix {...props} />;
    } else if (type === 'text') {
      field = <Text {...props} />;
    } else if (type === 'select') {
      field = <Select {...props} />;
    }

    return (
      <Paper>
        <div className={classes.header}>
          {required && (
            <Tooltip
              className={classes.required}
              title={<Trans>This Field is required!</Trans>}
            >
              <Icon>warning</Icon>
            </Tooltip>
          )}
          <Typography color="inherit" component="div">
            <Markdown source={publicDescription} escapeHtml={false} />
          </Typography>
        </div>
        <div className={classes.body}>{field}</div>
        {hint && hint !== '' && (
          <Typography color="inherit" component="div" className={classes.hint}>
            <Markdown source={hint} escapeHtml={false} />
          </Typography>
        )}
      </Paper>
    );
  }
}
ResponseField.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  publicDescription: PropTypes.string,
  hint: PropTypes.string,
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
