jest.dontMock('../index.jsx');
require('react/addons');

import React from 'react';
var Books = require('../index.jsx');
let TestUtils = React.addons.TestUtils;

describe('Books', function() {
  it('should call add a book to `this.state.books`', function() {
    let books = TestUtils.renderIntoDocument(<Books />);
    // TODO
  });
});
