## Intro

Properties are immutable parameters passed to a component. Think of them as function parameters: when you call a function you pass parameter to it.

The way you pass properties to a component is by declaring attributes in its tag. Think about the `href` attribute in the anchor tag:

```html
<a href='https://www.yld.io' >YLD!</a>
```

If `a` were a React component, you would be passing `href` as property to it. Let's try this by mocking an anchor in React:

```javascript
var Anchor = React.createClass({
  render: function() {
    return (<a href={this.props.href}></a>)
  }
});

var App = React.createClass({
  render: function() {
    return (<Anchor href='https://www.yld.io' />);
  }
});
```

Notice how `Anchor` has access to `this.props.href`.

## Challenge!

 * Add properties to your components
 * Set some default values
 * Render!

### Resources

 * [Transferring Props](https://facebook.github.io/react/docs/transferring-props.html)
 * [Default Prop Values](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)