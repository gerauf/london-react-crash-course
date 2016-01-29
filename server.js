var pascalCase = require('pascal-case');
var webpack = require('webpack');
var sync = require('browser-sync');
var path = require('path');
var fs = require('fs');


var exercises = fs.readdirSync(path.join(__dirname, 'exercises'))
.filter(function(ex) {
  return (/^\d\d/).test(ex);
}).map(function(ex) {
  var number = ex.match(/^\d\d/);

  var title = ex.replace(number, '')
  .replace(/\-/g, ' ')
  .split(/\s/)
  .map(function(word) {
    return pascalCase(word);
  })
  .join(' ');

  return {
    n: number,
    title: title,
    slug: ex
  };
}).reduce(function(all, ex) {
  all[ex.n] = {
    title: ex.title,
    slug: ex.slug
  };

  return all;
}, {});

fs.writeFileSync(path.join(__dirname, '.exercises.json'), JSON.stringify(exercises, null, 2), 'utf-8');

var start = function(opts) {
  var webpackCfg = {
    debug: true,
    devtool: 'eval',
    context: path.join(__dirname, opts.baseDir),
    entry: [
      'webpack-hot-middleware/client',
      opts.entry
    ],
    output: {
      path: path.join(__dirname, 'static'),
      publicPath: '/static/',
      filename: opts.filename
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
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

  // Init the webpack instance
  var compiler = webpack(webpackCfg);

  // Start the hot loader
  sync.create(opts.baseDir).init({
    ui: false,
    port: opts.port,
    open: opts.open,
    logLevel: 'info',
    server: {
      baseDir: opts.baseDir,
      index: opts.index,
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
      path.join(opts.baseDir, '*.html')
    ]
  });
};

start({
  port: 3000,
  open: true,
  entry: './index.jsx',
  filename: 'bundle.js',
  baseDir: 'exercises',
  index: 'index.html'
});