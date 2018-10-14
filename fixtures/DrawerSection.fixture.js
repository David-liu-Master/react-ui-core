import StarIcon from '@material-ui/icons/Star';

import DrawerSection from '../src/DrawerSection';

export default [
  {
    component: DrawerSection,
    props: {
      label: 'Header',
      links: [
        {
          label: 'Test',
          Icon: StarIcon,
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
          Icon: StarIcon,
          href: '/star'
        }
      ]
    }
  }
];
