import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Network from './Network';

function NetworkEditor(props) {
  const network = useRef(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  return (
    <div>
      <Network
        {...props}
        events={{
          selectEdge: e => {
            setSelectedEdge(e.edges[0]);
          },
          selectNode: () => {
            network.current.unselectAll();
          },
          deselectEdge: () => {
            setSelectedEdge(null);
          }
        }}
        options={{
          interaction: { hover: true }
        }}
        getNetwork={n => (network.current = n)}
      ></Network>
      <Button onClick={() => network.current.addEdgeMode()}>
        Add Connection
      </Button>
      {selectedEdge && (
        <>
          <Button onClick={() => network.current.deleteSelected()}>
            Delete Connection
          </Button>
        </>
      )}
    </div>
  );
}

NetworkEditor.propTypes = {};

export default NetworkEditor;
