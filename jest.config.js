export default {
  preset: 'ts-jest',
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.mocks.{ts,tsx}',
    '!<rootDir>/src/*.d.ts',
    '!<rootDir>/src/**/index.{ts,tsx}',
  ],
  setupFilesAfterEnv: [`<rootDir>/setupTests.ts`],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.mock.ts',
    '\\.(png|jpe?g|gif)$': '<rootDir>/src/__mocks__/asset.mock.ts',
  },
}
