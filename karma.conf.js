module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],

    files: [
      'src/**/*.spec.jsx'
    ],

    preprocessors: {
      'src/**/*.spec.jsx': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),
    
    webpackMiddleware: {
        noInfo: true
    },
    
    browsers: ['Chrome']

  });
};
