## Intro

Components have lifecycle, and React provides some methods to act on the various steps of that lifecycle.

One of the most common steps is the `componentDidMount` that is called immediately after the initial rendering occurs:

```javascript
React.createClass({
  componentDidMount: function() {
    console.log('component is going to render');
  },
  render: function() {
    console.log('component is going to rendering');
    return (<h1>Heyo</h1>);
  }
});
```

## Challenge!

  1. Implement the `componentWillMount` method and mutate the state in that method;
  2. Implement `componentDidMount` and log both the current state and the component's DOMNode using `React.findDOMNode`;

## Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)