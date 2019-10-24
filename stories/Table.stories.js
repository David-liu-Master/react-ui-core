import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../src/Table';

const columns = [
  {
    id: 'id',
    label: 'ID'
  },
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'phone',
    label: 'Phone'
  },
  {
    id: 'birthday',
    label: 'Birthday'
  }
];

const rows = [
  {
    id: 1,
    name: 'Fritz',
    phone: '+99 1234',
    birthday: '1990-01-03'
  }
];

storiesOf('Table', module).add('normal', () => (
  <Table label="Example" columns={columns} rows={rows} />
));
