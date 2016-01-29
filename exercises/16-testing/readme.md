## Intro

A good and common practice in the development world is to have reproducible and programatic tests so that we are able to make changes to our code with confidence that we are not creating new bugs.

There are a lot of tools to help with that. One of them was built by Facebook:

### Jest

[Jest](https://facebook.github.io/jest/) is a testing framework built on top of Jasmine. It helps to separate and organize the tests into small chunks:

```js
let ops = {
  sum(value1, value2) {
    return value1 + value2;
  }
  sumWrapper(value1, value2) {
    return ops.sum(value1, value2);
  }
};

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    expect(ops.sum(1, 2)).toBe(3);
  });

  it('adds -1 + 2 to equal 1', function() {
    expect(ops.sum(-1, 2)).toBe(1);
  });

  it('should call sum', function() {
    console.log(ops.sum, ops.sumWrapper, spyOn);
    spyOn(ops, 'sum');
    ops.sumWrapper(-1, 2);

    expect(ops.sum).toHaveBeenCalled();
  });
});
```

#### React

So that Jest's runtime can test JSX, a `preprocessor` must be created to transpile JSX into Javascript before it is tested. Look at preprocessor.js to see an example of this.

#### Mocking

Jest has a particularity: when a module is required in a test file, it automatically mocks its implementation so that you are not testing that module but your code.

We're not get into details on how that automatic mocking is generated, but you can prevent that from happening by calling `jest.dontMock`.

```js
jest.dontMock('../createCouple.js');
import createCouple from '../createCouple.js';

let couple = createCouple('userA', 'userB');
expect(couple[0].setName.mock.calls.length).toEqual(1);
```

### `TestUtils`

React is bundled with some test utilities to help with some common operations in your tests.

You should check the [full documentation](http://facebook.github.io/react/docs/test-utils.html) but we can exemplify some:


```js
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  toggle() {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (<input ref='check' checked={this.state.checked} onChange={this.toggle.bind(this)} type='checkbox' />);
  }
};


let checkbox = TestUtils.renderIntoDocument(<Checkbox />);
let $input = ReactDOM.findDOMNode(book.refs.check);

console.log($input.checked); // false
TestUtils.Simulate.change($checkbox);
console.log($input.checked); // true
```

## Challenge!

Remember the Books example? Review the code!

Edit the files in __tests__ and write the tests according to the description of each one.

### Resources

* [Jest](https://facebook.github.io/jest/)
* [Jest <-> React](https://facebook.github.io/jest/docs/tutorial-react.html#content)
* [Test Utilities](http://facebook.github.io/react/docs/test-utils.html)
* [Automatic Mocking](http://facebook.github.io/jest/docs/automatic-mocking.html#content)
* [example](https://github.com/facebook/jest/tree/master/examples/react)
* [JavaScript Unit Testing with Jest](https://www.youtube.com/watch?v=5ZEloUxx0FM)
