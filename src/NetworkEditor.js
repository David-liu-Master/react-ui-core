import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  editor: {
    position: 'relative'
  },
  spacer: {
    flex: 1,
    borderLeft: '1px solid grey',
    borderRight: '1px solid grey',
    height: '70%',
    margin: '0 8px'
  },
  buttons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

import Network from './Network';

function NetworkEditor({
  onChange,
  allowEditEdges,
  allowEditNodes,
  options,
  ...props
}) {
  const classes = useStyles();
  const network = useRef(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [edgeValue, setEdgeValue] = useState(0);
  const [isCreatingEdge, setIsCreatingEdge] = useState(false);
  const [isCreatingNode, setIsCreatingNode] = useState(false);

  function handleChange() {
    const nodes = network.current.body.data.nodes._data;
    const edges = network.current.body.data.edges._data;

    onChange({ nodes, edges });
  }

  function updateEdgeValue(e) {
    const value = e.target.value;
    if (value >= 0) {
      setEdgeValue(value);
      if (value > 0) {
        network.current.body.data.edges.update({
          id: selectedEdge.id,
          value: Number(value),
          label: `${value}`
        });
      } else {
        network.current.body.data.edges.update({
          id: selectedEdge.id,
          value: 0,
          label: ' '
        });
      }
    }
    handleChange();
  }

  return (
    <div className={classes.editor}>
      <Network
        events={{
          selectEdge: e => {
            if (e.nodes.length !== 1) {
              const edge = network.current.body.data.edges.get(e.edges[0]);
              setEdgeValue(edge.value || 0);
              setSelectedEdge(edge);
              setSelectedNode(null);
            }
          },
          selectNode: e => {
            setSelectedNode(e.nodes[0]);
            setSelectedEdge(null);
          },
          deselectEdge: () => {
            setSelectedEdge(null);
          },
          deselectNode: () => {
            setSelectedNode(null);
          },
          dragEnd: () => {
            network.current.unselectAll();
            setIsCreatingEdge(false);
            handleChange();
          },
          release: () => {
            setIsCreatingEdge(false);
            handleChange();
          },
          click: () => {
            setIsCreatingNode(false);
            handleChange();
          }
        }}
        options={{
          ...options,
          interaction: {
            hover: false
          }
        }}
        getNetwork={n => (network.current = n)}
        {...props}
      ></Network>
      {(allowEditNodes || allowEditEdges) && (
        <div className={classes.buttons}>
          {allowEditNodes && (
            <>
              {!isCreatingNode ? (
                <Button
                  onClick={() => {
                    network.current.addNodeMode();
                    setIsCreatingNode(true);
                  }}
                >
                  Add Node
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setIsCreatingNode(false);
                      network.current.disableEditMode();
                    }}
                  >
                    Cancel
                  </Button>
                  <Typography>
                    Click in an empty space to place a new node.
                  </Typography>
                </>
              )}
              {selectedNode !== null && (
                <>
                  <Button
                    onClick={() => {
                      network.current.deleteSelected();
                      setSelectedNode(null);
                      handleChange();
                    }}
                  >
                    Delete Selected Node
                  </Button>
                </>
              )}
              <div className={classes.spacer} />
            </>
          )}
          {allowEditEdges && (
            <>
              {selectedEdge !== null && (
                <>
                  <TextField
                    type="number"
                    variant="outlined"
                    margin="dense"
                    width={100}
                    value={edgeValue}
                    onChange={updateEdgeValue}
                  />
                  <Button
                    onClick={() => {
                      network.current.deleteSelected();
                      setSelectedEdge(null);
                      handleChange();
                    }}
                  >
                    Delete Selected Edge
                  </Button>
                </>
              )}
              {!isCreatingEdge ? (
                <Button
                  onClick={() => {
                    network.current.addEdgeMode();
                    network.current.unselectAll();
                    setSelectedNode(null);
                    setSelectedEdge(null);
                    setIsCreatingEdge(true);
                  }}
                >
                  Add Edge
                </Button>
              ) : (
                <>
                  <Typography>
                    Click on a node and drag the edge to another node to connect
                    them
                  </Typography>
                  <Button
                    onClick={() => {
                      setIsCreatingEdge(false);
                      network.current.disableEditMode();
                    }}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

NetworkEditor.propTypes = {
  onChange: PropTypes.func,
  allowEditNodes: PropTypes.bool,
  allowEditEdges: PropTypes.bool,
  options: PropTypes.object
};

NetworkEditor.defaultProps = {
  onChange: () => {},
  allowEditEdges: false,
  allowEditNodes: false,
  options: {}
};

export default NetworkEditor;
