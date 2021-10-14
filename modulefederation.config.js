const env = process.env.REACT_APP_ENV || 'development'
const name = 'senos'
const url = {
  development: `http://localhost:5000`,
  production: `https://tuphan-dn.github.io/2mf`,
}
const entrypoint = `${name}@${url[env]}/index.js`

module.exports = {
  name,
  filename: 'index.js',
  shared: {
    react: { singleton: true, requiredVersion: '^17.0.2' },
    'react-dom': { singleton: true, requiredVersion: '^17.0.2' },
    'react-router-dom': { singleton: true, requiredVersion: '^5.3.0' },
    '@reduxjs/toolkit': { singleton: true, requiredVersion: '^1.6.2' },
    'react-redux': { singleton: true, requiredVersion: '^7.2.5' },
    antd: { singleton: true, requiredVersion: '^4.17.0-alpha.5' },
  },
  remotes: {
    [name]: entrypoint,
  },
  exposes: {
    // Your app
    './': 'app/view',
    // SenOS
    './store': 'store',
    './store/ui.reducer': 'store/ui.reducer',
  },
}