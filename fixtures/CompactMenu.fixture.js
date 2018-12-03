import CompactMenu from '../src/CompactMenu';

export default [
  {
    component: CompactMenu,
    props: {
      items: [
        {
          label: 'star',
          icon: 'star',
          onClick: () => console.log('star')
        },
        {
          label: 'delete',
          icon: 'delete',
          onClick: () => console.log('delete')
        },
        {
          label: 'home',
          icon: 'home',
          onClick: () => console.log('home')
        }
      ]
    }
  }
];
