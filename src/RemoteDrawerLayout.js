import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DrawerLayout from './DrawerLayout';
import { fetchRemoteSection } from './redux/layout/actions';
import { getRemoteSections } from './redux/layout/selectors';

class RemoteDrawerLayout extends React.Component {
  componentDidMount() {
    const { remoteSectionURLs, fetchRemoteSection } = this.props;
    if (remoteSectionURLs.length > 0) {
      remoteSectionURLs.forEach(remoteSectionURL =>
        fetchRemoteSection(remoteSectionURL)
      );
    }
  }

  render() {
    const { remoteSections, drawer, ...props } = this.props;

    const remoteDrawer = {
      ...drawer,
      sections: [...drawer.sections, ...Object.values(remoteSections)]
    };

    return <DrawerLayout drawer={remoteDrawer} {...props} />;
  }
}

RemoteDrawerLayout.propTypes = {
  remoteSectionURLs: PropTypes.arrayOf(PropTypes.string),
  remoteSections: PropTypes.object,
  fetchRemoteSection: PropTypes.func.isRequired,
  appBar: PropTypes.shape(DrawerLayout.propTypes.appBar),
  drawer: PropTypes.shape(DrawerLayout.propTypes.drawer)
};

RemoteDrawerLayout.defaultProps = {
  remoteSectionURLs: [],
  remoteSections: {}
};

const mapStateToProps = state => ({
  remoteSections: getRemoteSections(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRemoteSection: url => dispatch(fetchRemoteSection(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoteDrawerLayout);
