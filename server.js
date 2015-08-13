var webpack = require('webpack');
var sync = require('browser-sync');
var path = require('path');


var webpackCfg = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'exercices'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  }
};

// Init the webpack instance
var compiler = webpack(webpackCfg);

// Start the hot loader
sync({
  open: false,
  logLevel: 'info',
  server: {
    baseDir: 'exercices',
    index: 'index.html',
    middleware: [
      require('webpack-dev-middleware')(compiler, {
        publicPath: webpackCfg.output.publicPath,
        stats: {
          colors: true
        }
      }),
      require('webpack-hot-middleware')(compiler)
    ]
  },
  files: [
    'exercices/*.html'
  ]
});