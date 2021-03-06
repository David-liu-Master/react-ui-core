import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import theme from './style/theme';
import DrawerSection from './DrawerSection';
import { getDrawerOpen } from './redux/layout/selectors';
import { toggleDrawer } from './redux/layout/actions';

const styles = theme => ({
  drawerPaper: {
    width: 240,
    display: 'flex'
  },
  logo: {
    display: 'inline-flex',
    marginLeft: theme.spacing(3)
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    maxHeight: 64
  },
  content: {
    flexGrow: 1,
    overflowX: 'scroll'
  },
  copyright: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  primaryLinks: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3)
  },
  secondaryLinks: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3)
  },
  link: {
    marginRight: theme.spacing(1),
    display: 'inline-block',
    textDecoration: 'none'
  },
  sections: {},
  footer: {}
});

export class Drawer extends React.Component {
  render() {
    const {
      classes,
      open,
      logo,
      toggleDrawer,
      sections,
      footer,
      variant
    } = this.props;
    return (
      <MuiDrawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant={variant}
        onClose={toggleDrawer}
        open={open}
      >
        <div className={classes.toolbar}>
          {variant === 'temporary' && (
            <React.Fragment>
              <IconButton onClick={toggleDrawer}>
                <Icon>menu</Icon>
              </IconButton>
              <div className={classes.logo}>{logo}</div>
            </React.Fragment>
          )}
        </div>
        <Divider />
        <div className={classes.content}>
          <div className={classes.sections}>
            {sections.map((section, i) => (
              <DrawerSection key={i} {...section} />
            ))}
          </div>
          <div className={classes.footer}>
            {footer.primaryLinks && (
              <div className={classes.primaryLinks}>
                {footer.primaryLinks.map(link => (
                  <Typography
                    component="a"
                    className={classes.link}
                    href={link.href}
                    variant="caption"
                    key={link.label}
                  >
                    {link.label}
                  </Typography>
                ))}
              </div>
            )}
            {footer.secondaryLinks && (
              <div className={classes.secondaryLinks}>
                {footer.secondaryLinks.map(link => (
                  <Typography
                    component="a"
                    className={classes.link}
                    href={link.href}
                    variant="caption"
                    key={link.label}
                  >
                    {link.label}
                  </Typography>
                ))}
              </div>
            )}
            <div className={classes.copyright}>
              <Typography variant="caption">{footer.copyright}</Typography>
            </div>
          </div>
        </div>
      </MuiDrawer>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  logo: PropTypes.node,
  sections: PropTypes.arrayOf(PropTypes.shape(DrawerSection.propTypes)),
  footer: PropTypes.shape({
    primaryLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    secondaryLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),
    copyright: PropTypes.string
  }),
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  variant: PropTypes.oneOf(['persistent', 'temporary'])
};

Drawer.defaultProps = {
  open: false,
  logo: <theme.Logo inverted />,
  toggleDrawer: () => {},
  variant: 'persistent',
  sections: [],
  footer: {}
};

const mapStateToProps = state => ({
  open: getDrawerOpen(state)
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Drawer));
