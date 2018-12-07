import axios from 'axios';
import ReduxRemoteTable from '../src/ReduxRemoteTable';

export default [
  {
    name: 'Fetch form Authentification',
    component: ReduxRemoteTable,
    props: {
      id: 'authentification-member',
      toolbar: {
        title: 'Members'
      },
      columns: [
        {
          id: 'id',
          label: 'ID'
        },
        {
          id: 'username',
          label: 'Username'
        }
      ],
      constructPagingURL: (page, pageSize, order, orderBy) =>
        `http://localhost:5000/v1/members?offset=${page *
          pageSize}&limit=${pageSize}&order=${order}&orderby=${orderBy}`,
      axios: axios,
      rowsSelector: data => data.members,
      countSelector: data => data.members_count
    }
  },
  {
    name: 'Disable Select',
    component: ReduxRemoteTable,
    props: {
      id: 'authentification-member',
      disableSelect: true,
      toolbar: {
        title: 'Members'
      },
      columns: [
        {
          id: 'id',
          label: 'ID'
        },
        {
          id: 'username',
          label: 'Username'
        }
      ],
      constructPagingURL: (page, pageSize, order, orderBy) =>
        `http://localhost:5000/v1/members?offset=${page *
          pageSize}&limit=${pageSize}&order=${order}&orderby=${orderBy}`,
      axios: axios,
      rowsSelector: data => data.members,
      countSelector: data => data.members_count
    }
  },
  {
    name: 'Disable Sort',
    component: ReduxRemoteTable,
    props: {
      id: 'authentification-member',
      disableSort: true,
      toolbar: {
        title: 'Members'
      },
      columns: [
        {
          id: 'id',
          label: 'ID'
        },
        {
          id: 'username',
          label: 'Username'
        }
      ],
      constructPagingURL: (page, pageSize, order, orderBy) =>
        `http://localhost:5000/v1/members?offset=${page *
          pageSize}&limit=${pageSize}&order=${order}&orderby=${orderBy}`,
      axios: axios,
      rowsSelector: data => data.members,
      countSelector: data => data.members_count
    }
  }
];
