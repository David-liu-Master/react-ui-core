import DrawerLayout from '../src/DrawerLayout';

export default [
  {
    component: DrawerLayout,
    props: {
      appBar: {},
      drawer: {
        sections: [
          {
            links: [
              {
                label: 'Link 1',
                icon: 'star',
                href: 'http://google.de'
              },
              {
                label: 'Link 2',
                icon: 'delete',
                href: 'http://google.de'
              },
              {
                label: 'Link 3',
                icon: 'home',
                href: 'http://google.de'
              }
            ]
          },
          {
            label: 'Section 2',
            links: [
              {
                label: 'Link 1',
                icon: 'star',
                href: 'http://google.de'
              },
              {
                label: 'Link 2',
                icon: 'delete',
                href: 'http://google.de'
              },
              {
                label: 'Link 3',
                icon: 'home',
                href: 'http://google.de'
              }
            ]
          },
          {
            links: [
              {
                label: 'Link 1',
                icon: 'star',
                href: 'http://google.de'
              },
              {
                label: 'Link 2',
                icon: 'delete',
                href: 'http://google.de'
              },
              {
                label: 'Link 3',
                icon: 'home',
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
      }
    },
    reduxState: {}
  },
  {
    component: DrawerLayout,
    props: {
      appBar: {},
      drawer: {
        variant: 'temporary',
        sections: [
          {
            links: [
              {
                label: 'Link 1',
                icon: 'star',
                href: 'http://google.de'
              },
              {
                label: 'Link 2',
                icon: 'delete',
                href: 'http://google.de'
              },
              {
                label: 'Link 3',
                icon: 'home',
                href: 'http://google.de'
              }
            ]
          },
          {
            label: 'Section 2',
            links: [
              {
                label: 'Link 1',
                icon: 'star',
                href: 'http://google.de'
              },
              {
                label: 'Link 2',
                icon: 'delete',
                href: 'http://google.de'
              },
              {
                label: 'Link 3',
                icon: 'home',
                href: 'http://google.de'
              }
            ]
          },
          {
            links: [
              {
                label: 'Link 1',
                icon: 'star',
                href: 'http://google.de'
              },
              {
                label: 'Link 2',
                icon: 'delete',
                href: 'http://google.de'
              },
              {
                label: 'Link 3',
                icon: 'home',
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
      }
    },
    reduxState: {}
  }
];
