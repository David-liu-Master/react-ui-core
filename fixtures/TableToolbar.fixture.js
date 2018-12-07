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
      selected: [2, 3]
    }
  },
  {
    component: TableToolbar,
    props: {
      title: 'Toolbar',
      selected: [2],
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
      selected: [2, 3],
      actions: [
        {
          label: 'Delete',
          icon: 'delete',
          onClick: selected => console.log(selected)
        },
        {
          label: 'Star',
          icon: 'star',
          onClick: selected => console.log(selected)
        }
      ]
    }
  }
];
