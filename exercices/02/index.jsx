var React = require('react');


var PropsEx = React.createClass({
  getDefaultProps: function() {
    return {
      // TODO
    };
  },
  render: function() {
    return (
      <div>
        <h1>Hello, Properties!</h1>
        { /* TODO do something with defined properties */ }
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    // TODO pass some properties to your component
    return (<PropsEx />);
  }
});