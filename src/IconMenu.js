import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

class IconMenu extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(item => (
          <Tooltip key={item.label} title={item.label}>
            <IconButton onClick={item.onClick}>
              <Icon>{item.icon}</Icon>
            </IconButton>
          </Tooltip>
        ))}
      </div>
    );
  }
}

IconMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  )
};

IconMenu.defaultProps = {
  items: []
};

export default IconMenu;
