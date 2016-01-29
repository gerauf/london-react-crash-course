var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'exercises'),
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.json?$/,
      exclude: /node_modules/,
      loaders: ['json']
    }, {
      test: /\.md$/,
      loaders: ['html', 'remarkable']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    // **IMPORTANT** This is needed so that each bootstrap js file required by
    // bootstrap-webpack has access to the jQuery object
    {
      test: /bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    },
    // Needed for the css-loader when bootstrap-webpack loads bootstrap's css.
    {
      test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  }
};