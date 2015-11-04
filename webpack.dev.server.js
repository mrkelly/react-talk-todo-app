var util = require('util');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

var server = new WebpackDevServer(
  webpack(webpackConfig),
  {
    noInfo: false,
    stats: { colors: true }
  }
);

server.listen('8080', 'localhost', function (err) {
  if (err) { console.log(err); }
});
