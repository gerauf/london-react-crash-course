var pascalCase = require('pascal-case');
var webpack = require('webpack');
var express = require('express');
var path = require('path');
var fs = require('fs');

var config = require('./webpack.config.js');

/******************************************************************************/

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

var str = JSON.stringify(exercises, null, 2);
var filename = path.join(__dirname, 'exercises/.exercises.json');
fs.writeFileSync(filename, str, 'utf-8');

/******************************************************************************/

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'exercises/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});


