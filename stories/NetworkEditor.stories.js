import React from 'react';
import { storiesOf } from '@storybook/react';

import NetworkEditor from '../src/NetworkEditor';

const graph = {
  nodes: [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' }
  ],
  edges: [
    { from: 1, to: 2, label: '5', value: 5 },
    { from: 1, to: 3, label: '10', value: 10 },
    { from: 2, to: 4, label: '2', value: 2 },
    { from: 2, to: 5, label: ' ', value: 0 }
  ]
};

const options = {
  edges: {
    scaling: {
      max: 1.5,
      min: 1,
      label: false,
      customScalingFunction: (min, max, _, value) => {
        value = max / value;
        if (value < min) {
          return min;
        }
        if (value > max) {
          return max;
        }
        return value;
      }
    },
    value: 0
  },
  height: '500px'
};

function onChange(e) {
  console.log(e);
}

storiesOf('NetworkEditor', module).add('normal', () => (
  <NetworkEditor
    allowEditEdges={true}
    graph={graph}
    options={options}
    onChange={onChange}
  />
));
