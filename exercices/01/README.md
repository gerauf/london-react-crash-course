## Intro

A component is a class that encapsulates your view and your logic associated with that view. Rather than having a typical MVC framework you have a template and some sort of view-controller, in React each component couples those into one.

### JSX

**JSX** is a small layer on top of Javascript that allows you to inline HTML in your code. Think of a tag as a variable in Javascript - and that's what actually happens when you transpile JSX into Javascript:

```javascript
var anchor = <a href="http://yld.io">YLD!</a>;
```
```jsx
var anchor = React.createElement('a', {
  href: 'http://yld.io'
}, 'YLD!');
```

### Component

To create a component you just need to create a React class. That class is eventually going to be instantiated, but let's not worry about that now.

```javascript
var anchor = React.createClass({
  render: function() {
    return (<a></a>);
  }
})
```

## Challenge!

 * Create your first component

### Resources

 * [Your first component](https://facebook.github.io/react/docs/tutorial.html#your-first-component)