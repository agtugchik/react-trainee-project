module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setup.jest.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svg.js',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^context/(.*)$': '<rootDir>/src/context/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^api/(.*)$': '<rootDir>/src/api/$1',
    '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
  },
};
