var React = require('react');
var BookForm = require('./BookForm.jsx');
var Book = require('./Book.jsx');

var Books = React.createClass({
  getInitialState: function() {
    return {
      books: [{
        title: 'Professional Node.js',
        author: 'Pedro Teixeira'
      }]
    };
  },
  onBook: function(book) {
    this.state.books.push(book);

    this.setState({
      books: this.state.books
    });
  },
  render: function() {
    var books = this.state.books.map(function(book) {
      return (<Book title={book.title} read={book.read} />);
    });

    return (
      <div>
        <BookForm onBook={this.onBook}></BookForm>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
});

module.exports = Books;