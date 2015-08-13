var React = require('react');

var BookForm = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      read: false
    };
  },
  changeTitle: function(ev) {
    // TODO change the title
  },
  changeRead: function() {
    // TODO change the read value
  },
  addBook: function(ev) {
    ev.preventDefault();

    // TODO update the parent!

    this.setState({
      title: '',
      read: false
    });
  },
  render: function() {
    return (
      <form onSubmit={this.addBook}>
        <div>
          <label htmlFor='title'>Title</label>
          <div><input type='text' id='title' value={this.state.title} onChange={this.changeTitle} placeholder='Title' /></div>
        </div>
        <div>
          <label htmlFor='title'>Read</label>
          <div><input type='checkbox' id='read' checked={this.state.read} onChange={this.changeRead} /></div>
        </div>
        <div>
          <button type='submit'>Add Book</button>
        </div>
      </form>
    );
  }
});


module.exports = BookForm;