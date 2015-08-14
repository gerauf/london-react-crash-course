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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      { test: /\.md$/, loaders: ['html', 'remarkable' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
      { test: /\.css$/, loaders: [ 'style', 'css' ] },

      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

      // Needed for the css-loader when bootstrap-webpack loads bootstrap's css.
      { test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
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
