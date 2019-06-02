import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import withReduxProvider from '../src/storybookProvider/withReduxProvider';

import Drawer from '../src/Drawer';

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withReduxProvider({
      core: {
        layout: {
          drawerOpen: true
        }
      }
    })
  )
  .add('persistent', () => <Drawer />)
  .add('sections', () => (
    <Drawer
      sections={[
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
      ]}
    />
  ))
  .add('temporary', () => <Drawer variant="temporary" />);
