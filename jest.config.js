/* eslint max-len: ["error", { "ignoreComments": true }] */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/controllers/**/*.ts', 'src/models/schemas/*.ts'],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['text', 'lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/data/'],
  watchPathIgnorePatterns: ['/node_modules/', '<rootDir>/data'],
  // globalSetup: '<rootDir>/src/config/preTests.ts',
  // globalTeardown: '<rootDir>/src/config/posTests.ts',
};
