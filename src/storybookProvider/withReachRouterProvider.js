import React from 'react';
import {
  createMemorySource,
  createHistory,
  LocationProvider,
  Location,
  Router
} from '../router';

const withReachRouterProvider = url => story => {
  const source = createMemorySource(url);
  const history = createHistory(source);

  return (
    <LocationProvider history={history}>
      <Location>
        {({ location }) => <Router location={location}>{story()}</Router>}
      </Location>
    </LocationProvider>
  );
};

export default withReachRouterProvider;
