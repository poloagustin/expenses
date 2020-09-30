jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    subscriptionUri: 'wss://localhost',
    appHost: 'http://localhost',
  },
}));
