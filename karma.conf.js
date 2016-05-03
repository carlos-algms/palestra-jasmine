module.exports = function karmaConf(config) {
  config.set({
    autoWatch: true,

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    browsers: [
      'Chrome'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      'app/**/**/*.js'
    ],
  });
};
