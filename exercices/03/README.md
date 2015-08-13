## Intro

Remember how properties are immutable? How about internal logic, how do we manage it? For that, each component has its internal `state`.

```javascript
var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      checked: false
    };
  },
  render: function() {
    return (<input type='checkbox' checked={this.state.checked} />);
  }
});
```

Now, let's see how one could change the state:

```javascript
var Checkbox = React.createClass({
  getInitialState: function() {
    return {
      checked: ''
    };
  },
  toggle: function() {
    this.setState({
      checked: !this.state.checked
    });
  },
  render: function() {
    return (<input type='checkbox' checked={this.state.checked} onChange={this.toggle} />);
  }
});
```

When you `setState`, `render` is called again with a new state. Only using `setState` is going to change the values of a `this.state` and trigger a new render.


## Challenge!

 * Add state to your components!
 * Add initial state values
 * Render!
 * Understand how mutable values work by changing them using setState()

### Resources

 * [setState](https://facebook.github.io/react/docs/component-api.html#setstate)
 