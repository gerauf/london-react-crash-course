var React = require('react');

var Book = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title,
      read: this.props.read
    };
  },
  // TODO add the missing event!
  render: function() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td><input type='checkbox' checked={this.state.read} /></td>
      </tr>
    );
  }
});

module.exports = Book;