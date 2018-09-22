module.exports = {
  type: 'react-component',
  babel: {
    plugins: 'macros',
    presets: ['react-app']
  },
  npm: {
    esModules: true,
    umd: false
  }
};
