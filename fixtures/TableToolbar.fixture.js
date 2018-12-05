import TableToolbar from '../src/TableToolbar';

export default [
  {
    component: TableToolbar,
    props: {
      title: 'Toolbar'
    }
  },
  {
    component: TableToolbar,
    props: {
      title: 'Toolbar',
      numSelected: 2
    }
  },
  {
    component: TableToolbar,
    props: {
      title: 'Toolbar',
      numSelected: 2,
      actions: [
        {
          label: 'Delete',
          icon: 'delete',
          onClick: () => console.log('delete')
        }
      ]
    }
  },
  {
    component: TableToolbar,
    props: {
      title: 'Toolbar',
      numSelected: 2,
      actions: [
        {
          label: 'Delete',
          icon: 'delete',
          onClick: () => console.log('delete')
        },
        {
          label: 'Star',
          icon: 'star',
          onClick: () => console.log('star')
        }
      ]
    }
  }
];
