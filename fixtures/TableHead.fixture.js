import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '../src/TableHead';

const WrapperComponent = props => (
  <Table>
    <TableHead {...props} />
  </Table>
);

WrapperComponent.displayName = 'TableHead';

export default [
  {
    component: WrapperComponent,
    props: {
      columns: [
        {
          id: 'username',
          label: 'Username'
        },
        {
          id: 'items',
          label: '#Item',
          numeric: true
        }
      ]
    }
  },
  {
    component: WrapperComponent,
    props: {
      onSelectAllClick: () => {},
      columns: [
        {
          id: 'username',
          label: 'Username'
        },
        {
          id: 'items',
          label: '#Item',
          numeric: true
        }
      ]
    }
  },
  {
    component: WrapperComponent,
    props: {
      order: 'asc',
      orderBy: 'items',
      onRequestSort: (event, property) => console.log(property),
      columns: [
        {
          id: 'username',
          label: 'Username'
        },
        {
          id: 'items',
          label: '#Item',
          numeric: true
        }
      ]
    }
  }
];
