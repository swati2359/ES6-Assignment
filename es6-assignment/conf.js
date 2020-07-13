exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['./src/tests/login-specs.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 3000
  }
};