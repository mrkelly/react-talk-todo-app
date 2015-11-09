'use strict';

var path = require('path');
var WebpackHtmlPlugin = require('webpack-html-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/src',
  target: 'web',
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  entry: {
    index: ['./index.jsx']
  },
  output: {
    path: path.resolve(__dirname + '/build'),
    publicPath: '/',
    filename: '[name].js',
    pathinfo: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
        }
      }, {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      { test: /\.woff(2)??$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new WebpackHtmlPlugin({
      inject: true,
      hash: true,
      title: 'React Todo',
      favicon: __dirname + '/src/assets/favicon.ico',
      filename: 'index.html',
      template: __dirname + '/src/index.html'
    }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
