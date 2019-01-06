import React from 'react';
import {
  createMemorySource,
  createHistory,
  LocationProvider,
  Location,
  Router
} from '../router';

export const withReachRouter = (WrappedComponent, path = '/*') => ({
  url,
  ...props
}) => {
  const source = createMemorySource(url);
  const history = createHistory(source);

  return (
    <LocationProvider history={history}>
      <Location>
        {({ location }) => (
          <Router location={location}>
            <WrappedComponent {...props} path={path} />
          </Router>
        )}
      </Location>
    </LocationProvider>
  );
};
