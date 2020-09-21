import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: process.env.NX_AUTH0_DOMAIN,
  clientId: process.env.NX_AUTH0_CLIENT_ID,
  clientSecret: process.env.NX_AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.NX_AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.NX_AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.NX_AUTH0_COOKIE_SECRET,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000,
  },
});
