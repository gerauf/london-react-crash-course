var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      count: 1
    };
  },
  render: function() {
    console.log('rendering');
    return (<h1>The count is: {this.state.count}</h1>);
  }
});