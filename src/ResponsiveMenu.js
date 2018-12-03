import React from 'react';
import PropTypes from 'prop-types';

import CompactMenu from './CompactMenu';
import IconMenu from './IconMenu';

class ResponsiveMenu extends React.Component {
  render() {
    const { items, compact } = this.props;
    if (compact) {
      return <CompactMenu items={items} />;
    }
    return <IconMenu items={items} />;
  }
}

ResponsiveMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  compact: PropTypes.bool
};

ResponsiveMenu.defaultProps = {
  items: [],
  compact: false
};

export default ResponsiveMenu;
