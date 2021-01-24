module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  maxWorkers: 1,
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/index.html'],
  moduleDirectories: ['node_modules'],
};
