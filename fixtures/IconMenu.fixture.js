import IconMenu from '../src/IconMenu';

export default [
  {
    component: IconMenu,
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
