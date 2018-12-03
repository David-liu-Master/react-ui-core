import Button from '@material-ui/core/Button';
import RemoteDrawerLayout from '../src/RemoteDrawerLayout';

export default [
  {
    component: RemoteDrawerLayout,
    reduxState: {},
    props: {
      remoteSectionURLs: ['http://localhost:5000/navigation']
    }
  },
  {
    component: RemoteDrawerLayout,
    reduxState: {},
    props: {
      remoteSectionURLs: ['http://localhost:5000/navigation'],
      remoteSectionLinkComponent: Button
    }
  }
];
