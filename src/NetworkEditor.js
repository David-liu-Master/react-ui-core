import React from 'react';
import PropTypes from 'prop-types';

import Network from './Network';

function NetworkEditor(props) {
  return (
    <Network
      {...props}
      options={{
        interaction: { hover: true },
        manipulation: {
          enabled: true
        }
      }}
    ></Network>
  );
}

NetworkEditor.propTypes = {};

export default NetworkEditor;
