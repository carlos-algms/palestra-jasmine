module.exports = function karmaConf(config) {
  config.set({
    autoWatch: true,

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-ajax',
    ],

    browsers: [
      'Chrome'
    ],

    frameworks: [
      'jasmine-ajax',
      'jasmine'
    ],

    files: [
      'node_modules/jquery/dist/jquery.js',
      'app/**/**/*.js'
    ],
  });
};
