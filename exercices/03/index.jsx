var React = require('react');

var StateEx = React.createClass({
  // TODO add some initial state values: a string ('title') and a array of objects ('guestList')
  render: function() {
    return (
      <div>
        <h1>Let's play with state!</h1>
        { /* TODO add the title */ }
        { /* TODO add a table with the guestList values */ }
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (<StateEx />);
  }
});