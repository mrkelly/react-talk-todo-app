var path = require('path');
var WebpackHtmlPlugin = require('webpack-html-plugin');

module.exports = {
  context: path.join(__dirname, './src'),
  target: 'web',
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  entry: {
    app: ['./app.jsx']
  },
  output: {
    path: path.resolve('./build'),
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
        loader: 'style!css!sass'
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
      filename: 'index.html',
      template: __dirname + '/src/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
};
