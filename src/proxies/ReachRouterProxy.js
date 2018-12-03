/* eslint-disable */
import React from 'react';
import { ServerLocation } from '@reach/router';

export const createReachRouterProxy = basepath => {
  function addBasepath(url) {
    if (!basepath) {
      return url;
    }
    if (!basepath.endsWith('/')) {
      basepath = `${basepath}/`;
    }
    return `${basepath}${url}`;
  }
  return props => {
    const { nextProxy, ...rest } = props;
    const { value: NextProxy, next } = nextProxy;
    const {
      fixture: { url = '/' }
    } = rest;

    return React.createElement(
      ServerLocation,
      { url: addBasepath(url) },
      React.createElement(NextProxy, { ...rest, nextProxy: next() })
    );
  };
};

export default createReachRouterProxy();
/* eslint-enable */
