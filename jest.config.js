// Jest configuration file
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: ['src/.*\.test\.(js|ts)$'],
  moduleFileExtensions: ['ts', 'js', 'json'],

  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      useESM: true, // Enable ECMAScript modules
    }],
  },

  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/coverage/"],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['html'],
  testTimeout: 30000, // Global timeout (in milliseconds)
  maxConcurrency: 5, // Maximum number of tests to run in parallel

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Handle module imports with .js extension
  },
};

export default config;
