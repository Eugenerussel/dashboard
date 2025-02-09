const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'businessOperation',

  exposes: {
    './routes': './src/app/app.routes.ts',
  },

  remotes:{
    'call-center': "http://localhost:4204/remoteEntry.js",
    'Enrollment': "http://localhost:4203/remoteEntry.js",
    'claims': "http://localhost:4202/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
