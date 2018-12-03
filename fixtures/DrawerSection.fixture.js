import DrawerSection from '../src/DrawerSection';

export default [
  {
    component: DrawerSection,
    props: {
      label: 'Header',
      links: [
        {
          label: 'Test',
          icon: 'star',
          href: '/star'
        }
      ]
    }
  },
  {
    component: DrawerSection,
    props: {
      links: [
        {
          label: 'Test',
          icon: 'star',
          href: '/star'
        }
      ]
    }
  }
];
