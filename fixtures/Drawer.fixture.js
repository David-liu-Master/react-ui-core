import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';

import Drawer from '../src/Drawer';

export default [
  {
    component: Drawer,
    props: {
      sections: [
        {
          links: [
            {
              label: 'Link 1',
              Icon: StarIcon,
              href: 'http://google.de'
            },
            {
              label: 'Link 2',
              Icon: DeleteIcon,
              href: 'http://google.de'
            },
            {
              label: 'Link 3',
              Icon: HomeIcon,
              href: 'http://google.de'
            }
          ]
        },
        {
          label: 'Section 2',
          links: [
            {
              label: 'Link 1',
              Icon: StarIcon,
              href: 'http://google.de'
            },
            {
              label: 'Link 2',
              Icon: DeleteIcon,
              href: 'http://google.de'
            },
            {
              label: 'Link 3',
              Icon: HomeIcon,
              href: 'http://google.de'
            }
          ]
        },
        {
          links: [
            {
              label: 'Link 1',
              Icon: StarIcon,
              href: 'http://google.de'
            },
            {
              label: 'Link 2',
              Icon: DeleteIcon,
              href: 'http://google.de'
            },
            {
              label: 'Link 3',
              Icon: HomeIcon,
              href: 'http://google.de'
            }
          ]
        }
      ],
      footer: {
        primaryLinks: [
          {
            label: 'primary1',
            href: '/primary1'
          },
          {
            label: 'primary2',
            href: '/primary2'
          },
          {
            label: 'primary3',
            href: '/primary3'
          }
        ],
        secondaryLinks: [
          {
            label: 'secondary1',
            href: '/secondary1'
          },
          {
            label: 'secondary2',
            href: '/secondary2'
          },
          {
            label: 'secondary3',
            href: '/secondary3'
          }
        ],
        copyright: '© 2018 OpenPatch'
      }
    },
    reduxState: {
      core: {
        layout: {
          drawerOpen: true
        }
      }
    }
  },
  {
    component: Drawer,
    props: {
      variant: 'temporary'
    },
    reduxState: {
      core: {
        layout: {
          drawerOpen: true
        }
      }
    }
  }
];
