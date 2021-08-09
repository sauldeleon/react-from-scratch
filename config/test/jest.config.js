export default {
  rootDir: '../../',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/config/typescript/tsconfig.json',
    },
  },
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.mocks.{ts,tsx}',
    '!<rootDir>/src/*.d.ts',
    '!<rootDir>/src/**/index.{ts,tsx}',
  ],
  setupFilesAfterEnv: [`<rootDir>/config/test/jest.setup.ts`],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/style.mock.ts',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.mock.ts',
    '\\.(png|jpe?g|gif)$': '<rootDir>/src/__mocks__/asset.mock.ts',
  },
}
