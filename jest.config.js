module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setup.jest.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^context/(.*)$': '<rootDir>/src/context/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
  },
};
