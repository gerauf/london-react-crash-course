jest.dontMock('../BookForm.jsx');
require('react/addons');

import React from 'react';
var BookForm = require('./BookForm.jsx');

let TestUtils = React.addons.TestUtils;

describe('BookForm', function() {
  it('should call onBook with a book object', function() {
    let evs = {
      onBook() {}
    };

    let bf = TestUtils.renderIntoDocument(<BookForm onBook={evs.onBook.bind(this)} />);
    // TODO
  });
});
