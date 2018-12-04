import AppBar from '../src/AppBar';

export default [
  {
    component: AppBar,
    reduxState: {
      core: {
        layout: {
          appBarTitle: 'Home'
        }
      }
    }
  },
  {
    component: AppBar,
    reduxState: {
      core: {
        layout: {
          appBarTitle: 'Dashboard'
        }
      }
    }
  }
];
