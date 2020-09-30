const withSass = require('@zeit/next-sass');
module.exports = withSass({
  // Set this to true if you use CSS modules.
  // See: https://github.com/css-modules/css-modules
  cssModules: false,
  publicRuntimeConfig: {
    subscriptionUri: process.env.NX_BACKEND_SUBSCRIPTION_URI,
    appHost: process.env.NX_APP_HOST,
  },
});
