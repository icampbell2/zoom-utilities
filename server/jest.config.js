const esModules = ['lodash-es'].join('|');

/* eslint-env node */
module.exports = {
  globals: {
    __DEV__: true
  },
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'json', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.d.ts$',
    'index.js',
    'index.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(spec|test).+(ts|js)'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/$1'
  },
  transform: {
    // See https://jestjs.io/docs/en/configuration.html#transformignorepatterns-array-string
    [`^(${esModules}).+\\.js$`]: 'babel-jest',
    '^.+\\.(ts|js)$': 'ts-jest'
  },
  transformIgnorePatterns: [`node_modules/(?!(${esModules}))`]
};
