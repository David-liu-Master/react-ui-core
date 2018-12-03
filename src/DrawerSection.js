import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import { Link } from '@reach/router';

class DrawerSection extends React.Component {
  render() {
    const { useRouter, label, links } = this.props;
    return (
      <div>
        <List component="nav">
          {label && <ListSubheader>{label}</ListSubheader>}
          {links.map(link => {
            if (useRouter) {
              return (
                <ListItem
                  component={Link}
                  to={link.href}
                  key={link.label}
                  button
                >
                  <ListItemIcon>
                    <Icon>{link.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText inset primary={link.label} />
                </ListItem>
              );
            }
            return (
              <ListItem component="a" href={link.href} key={link.label} button>
                <ListItemIcon>
                  <Icon>{link.icon}</Icon>
                </ListItemIcon>
                <ListItemText inset primary={link.label} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </div>
    );
  }
}

DrawerSection.propTypes = {
  label: PropTypes.string,
  useRouter: PropTypes.boolean,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
};

export default DrawerSection;
