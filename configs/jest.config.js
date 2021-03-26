const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  "rootDir": "..",
  "coverageDirectory": "<rootDir>/__mocks__/__coverage__/",
  "clearMocks": true,
  "setupFiles": [
    "<rootDir>/__mocks__/shim.js"
  ],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  "moduleNameMapper": {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx"],
  "transform": {
    ...tsjPreset.transform,
  },
  "transformIgnorePatterns": [
    "/node_modules/"
  ],
  "testRegex": ".*\.test\.(ts|tsx)$",
  "moduleDirectories": [
    "node_modules"
  ],
  "globals": {
    "DEVELOPMENT": false,
    "FAKE_SERVER": false
  }
}
