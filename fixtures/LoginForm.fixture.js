import LoginForm from '../src/LoginForm';

export default [
  {
    component: LoginForm,
    props: {
      onLogin: (username, password) => console.log(username, password),
      onRegister: (username, password, email) =>
        console.log(username, password, email)
    }
  },
  {
    component: LoginForm,
    props: {
      onLogin: (username, password) => console.log(username, password),
      onRegister: (username, password, email) =>
        console.log(username, password, email),
      status: 'sending'
    }
  }
];
