module.exports = {
  rootDir: '.',
  roots: ['<rootDir>/src/lesson_7', '<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['./**/?(*.)+(spec|test).[jt]s?(x)'],
  coverageDirectory: '<rootDir>/src/lesson_7/coverage',
  collectCoverageFrom: ['<rootDir>/src/lesson_7/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|jpg|png|svg|json)$': '<rootDir>/empty-module.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
