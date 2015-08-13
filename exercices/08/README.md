## Challenge!

  1. Go trough all the lifecycle methods you learned about and implement all of them in the Display component. On each one log the component name and the order you think they will be called. Change the order number until you can figure out the right answer. Ex:

```javascript
var Display = React.createClass({
  ...,
  shouldComponentUpdate: function() {
    console.log(1, 'shouldComponentUpdate');
    return true;
  },
  componentWillUpdate: function() {
    console.log(2, 'componentWillUpdate');
  },
  componentWillUnmount: function() {
    console.log(3, 'componentWillUnmount');
    clearInterval(this.interval);
  },
  componentWillReceiveProps: function() {
    console.log(4, 'componentWillReceiveProps');
  },
  componentWillMount: function() {
    console.log(5, 'componentWillMount');
  },
  componentDidUpdate: function() {
    console.log(6, 'componentDidUpdate');
  },
  componentDidMount: function() {
    console.log(6, 'componentDidMount');
    this.interval = setInterval(this.tick, 100);
  },
  render: function() {
    console.log(7, 'render');
    return ...;
  },
  ...
});
```

## Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)