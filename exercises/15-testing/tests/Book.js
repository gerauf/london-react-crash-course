import test from 'ava';
import { render } from 'enzyme';
import React from 'react';

import Book from '../Book.jsx';

test('should have a checked checkbox', function(t) {
  const book = render(<Book read={true} />);
  t.deepEqual(book.find('input').attr('checked'), 'checked');
});

test('should toggle the checkbox when clicked', function(t) {
  t.pass();
});