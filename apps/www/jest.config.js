const { setConfig } = require('next/config');
const config = require('./next.config');

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig(config.publicRuntimeConfig);

module.exports = {
  name: 'www',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/www',
  setupFiles: ['<rootDir>/jest.setup.js'],
};
