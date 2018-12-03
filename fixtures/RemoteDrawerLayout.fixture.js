import RemoteDrawerLayout from '../src/RemoteDrawerLayout';

export default [
  {
    component: RemoteDrawerLayout,
    reduxState: {},
    props: {
      drawer: {
        sections: []
      },
      remoteSectionURLs: ['http://localhost:5000/navigation']
    }
  }
];
