import React from 'react';
import Table from '../src/Table';

const props = {
  onPageChange: page => console.log(`New Page ${page}`),
  onPageSizeChange: pageSize => console.log(`New Pagesize ${pageSize}`),
  rowsCount: 20,
  toolbar: {
    title: 'Members'
  },
  additionalCellTypes: {
    button: ({ id, value, onClick }) => (
      <button onClick={() => onClick(value)}>{value}</button>
    )
  },
  columns: [
    {
      id: 'username',
      label: 'Username',
      type: 'bold'
    },
    {
      id: 'items',
      label: '#Items',
      numeric: true,
      type: 'button',
      cellProps: {
        onClick: value => console.log(value)
      }
    },
    {
      id: 'tests',
      label: '#Tests',
      numeric: true
    }
  ],
  rows: [
    {
      id: 2,
      username: 'admin',
      items: 56,
      tests: 20
    },
    {
      id: 34,
      username: 'test',
      items: 26
    }
  ]
};

export default [
  {
    component: Table
  },
  {
    component: Table,
    props: {
      ...props
    }
  },
  {
    component: Table,
    props: {
      ...props,
      selected: [34],
      onSelectRows: ids => console.log(`Select ${ids}`),
      onDeselectRows: ids => console.log(`Deselect ${ids}`)
    }
  },
  {
    component: Table,
    props: {
      ...props,
      pageSize: 2,
      selected: [2, 34],
      onSelectRows: ids => console.log(`Select ${ids}`),
      onDeselectRows: ids => console.log(`Deselect ${ids}`)
    }
  }
];
