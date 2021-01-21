module.exports = function(config) {
  if (config.sauceLabs && ((!config.sauceLabs.username && !process.env.SAUCE_USERNAME) || (!config.sauceLabs.accessKey && !process.env.SAUCE_ACCESS_KEY))) {
    console.log('Undefined sauce username/accessKey.');
    process.exit(1)
  }

  // define SL browsers
  var customLaunchers = {
    sl_ie10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platformName: 'Windows 8',
      browserVersion: '10.0'
    },
    sl_ie11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platformName: 'Windows 10',
      browserVersion: '11.0'
    },
    sl_edge: {
      base: 'SauceLabs',
      browserName: 'microsoftedge',
      platformName: 'Windows 10',
      version: '20.10240'
    },
    sl_chromeW3C: {
      base: 'SauceLabs',
      browserName: 'chrome',
      browserVersion: 'latest',
      'sauce:options':{
        tags: ['w3c-chrome']
      }
    },
    sl_chrome_1: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platformName: 'Linux',
      browserVersion: '26'
    },
    sl_chrome_2: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platformName: 'Linux',
      version: '46'
    },
    sl_firefox_1: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platformName: 'Linux',
      version: '13'
    },
    sl_firefox_2: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platformName: 'Linux',
      version: '42'
    },
    sl_ff: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platformName: 'Linux',
      version: '45'
    },
    sl_ff_win: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platformName: 'Windows 10',
      version: '80'
    },
    sl_android: {
      base: 'SauceLabs',
      deviceName: 'Android GoogleAPI Emulator',
      platform: 'Android',
      version: '11.0',
      browserName: 'chrome',
      appiumVersion: '1.18.1',
      deviceOrientation: 'portrait'
    },
    sl_android_1: {
      base: 'SauceLabs',
      browserName: 'Android',
      platformName: 'Linux',
      version: '4.4'
    },
    sl_android_2: {
      base: 'SauceLabs',
      browserName: 'Android',
      platformName: 'Linux',
      version: '5.1'
    },
    sl_iphone_1: {
      base: 'SauceLabs',
      browserName: 'iPhone',
      platformName: 'OS X 10.10',
      deviceName: 'iPad Simulator',
      version: '7.1'
    },
    sl_iphone_2: {
      base: 'SauceLabs',
      browserName: 'iPhone',
      platformName: 'OS X 10.10',
      deviceName: 'iPad Simulator',
      deviceOrientation: 'portrait',
      version: '9.2'
    },
    sl_safari_1: {
      base: 'SauceLabs',
      browserName: 'safari',
      platformName: 'OS X 10.8',
      version: '6.0'
    },
    sl_safari_2: {
      base: 'SauceLabs',
      browserName: 'safari',
      platformName: 'OS X 10.11',
      version: '9.0'
    }
  }

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/sinon/pkg/sinon.js',
      'dist/flow.cov.js',
      'test/*Spec.js'
    ],

    preprocessors: {
      'src/*.js': 'coverage'
    },

    // list of files to exclude
    exclude: [

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],
    coverageReporter: [
      {type: "lcov", dir: "coverage", subdir: "."}
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    customLaunchers: customLaunchers,

    browsers: Object.keys(customLaunchers)
  });
};
