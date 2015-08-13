var React = require('react');
var buildArray = require('build-array');
var pad = require('pad');

var exercices = buildArray(10).map(function(n, i) {
  return pad(2, String(i + 1), '0');
});

var getIndex = function() {
  return React.createClass({
    render: function() {
      var links = exercices.map(function(ex) {
        var href = '#' + ex;
        return (<li><a href={href} >{ex}</a></li>);
      });

      return (<ul>
        {links}
      </ul>);
    }
  });
};

var onHashChange = function() {
  var ex = window.location.hash.replace(/^\#/, '');

  React.render(React.createElement((function(hasEx) {
    return !hasEx ? getIndex() : require('./' + ex + '/index.jsx');
  })(ex.length), {}), document.getElementById('app'));
};


window.onhashchange = onHashChange;

onHashChange();