jest.dontMock('../Book.jsx');
require('react/addons');

import React from 'react';
var Book = require('./Book.jsx');
let TestUtils = React.addons.TestUtils;

describe('Book', function() {
  let book;

  beforeEach(function() {
    book = TestUtils.renderIntoDocument(<Book read={true} />);
  });

  it('should have a checked checkbox', function() {
    // TODO
  });

  it('should toggle the checkbox when clicked', function() {
    // TODO
  });
});
