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
    { from: 1, to: 2, label: '>= 5' },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
  ]
};

const options = {
  edges: {
    color: '#000000'
  },
  height: '500px'
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
  }
};

storiesOf('NetworkEditor', module).add('normal', () => (
  <NetworkEditor graph={graph} options={options} events={events} />
));
