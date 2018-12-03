import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';

class CompactMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({
      open: false
    });
  };

  render() {
    const { items } = this.props;
    const { open } = this.state;
    return (
      <div>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          color="inherit"
          aria-owns={open ? 'menu-list' : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <Icon>more_vert</Icon>
        </IconButton>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          modifiers={{
            flip: {
              enabled: true
            },
            preventOverflow: {
              enabled: true
            }
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {items.map(item => (
                      <MenuItem key={item.label} onClick={item.onClick}>
                        <ListItemIcon>
                          <Icon>{item.icon}</Icon>
                        </ListItemIcon>
                        <ListItemText inset primary={item.label} />
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

CompactMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  )
};

CompactMenu.defaultProps = {
  items: []
};

export default CompactMenu;
