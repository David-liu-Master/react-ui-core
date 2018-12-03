import ResponsiveMenu from '../src/ResponsiveMenu';

export default [
  {
    component: ResponsiveMenu,
    props: {
      compact: true,
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
  },
  {
    component: ResponsiveMenu,
    props: {
      compact: false,
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
