import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
});

class TableToolbar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.number),
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.string,
        onClick: PropTypes.func
      })
    )
  };

  static defaultProps = {
    actions: [],
    selected: []
  };

  render() {
    const { classes, title, actions, selected } = this.props;
    const numSelected = selected.length;
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit">{numSelected} selected</Typography>
          ) : (
            <Typography id="tableTitle">{title}</Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 && (
            <React.Fragment>
              {actions.map((action, i) => (
                <Tooltip key={i} title={action.label}>
                  <IconButton
                    aria-label={action.label}
                    onClick={() => action.onClick(selected)}
                  >
                    <Icon>{action.icon}</Icon>
                  </IconButton>
                </Tooltip>
              ))}
            </React.Fragment>
          )}
        </div>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(TableToolbar);
