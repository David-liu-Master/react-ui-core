import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _map from 'lodash/map';

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
    const {
      remoteSections,
      drawer,
      remoteSectionLinkComponent,
      ...props
    } = this.props;

    let combinedSections = [...Object.values(remoteSections)];

    combinedSections = _map(combinedSections, section => {
      section.links = _map(section.links, link => {
        link.component = remoteSectionLinkComponent;
        return link;
      });
      return section;
    });

    if (drawer.sections) {
      combinedSections = [...drawer.sections, ...combinedSections];
    }

    const remoteDrawer = {
      ...drawer,
      sections: combinedSections
    };

    return <DrawerLayout drawer={remoteDrawer} {...props} />;
  }
}

RemoteDrawerLayout.propTypes = {
  remoteSectionURLs: PropTypes.arrayOf(PropTypes.string),
  remoteSections: PropTypes.object,
  remoteSectionLinkComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
  fetchRemoteSection: PropTypes.func.isRequired,
  appBar: PropTypes.shape(DrawerLayout.propTypes.appBar),
  drawer: PropTypes.shape(DrawerLayout.propTypes.drawer)
};

RemoteDrawerLayout.defaultProps = {
  remoteSectionURLs: [],
  remoteSections: {},
  remoteSectionLinkComponent: 'a',
  drawer: {}
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
