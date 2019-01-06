import React from 'react';
import {
  createMemorySource,
  createHistory,
  LocationProvider,
  Location,
  Router
} from '../router';

export const createReachRouterProxy = () => {
  class ReachRouterProxy extends React.Component {
    render() {
      const {
        nextProxy,
        fixture: { url = '/' }
      } = this.props;
      const { value: NextProxy, next } = nextProxy;
      const source = createMemorySource(url);
      const history = createHistory(source);

      return (
        <LocationProvider history={history}>
          <Location>
            {({ location }) => (
              <Router location={location}>
                <NextProxy {...this.props} nextProxy={next()} path="/*" />
              </Router>
            )}
          </Location>
        </LocationProvider>
      );
    }
  }
  return ReachRouterProxy;
};

export default createReachRouterProxy();
