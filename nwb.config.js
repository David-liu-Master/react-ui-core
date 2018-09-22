module.exports = {
  type: 'react-component',
  babel: {
    plugins: 'macros',
    presets: ['react-app'],
    config(config) {
      config.ignore = [
        'src/**/*.fixture.js',
        'src/**/*.test.js'
      ]
      return config
    }
  },
  npm: {
    esModules: true,
    umd: false
  }
};
