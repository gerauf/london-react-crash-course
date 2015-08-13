## Intro

To listen to events in your DOM element, you just need to pass a function to them: 

```javascript
var anchor = React.createClass({
  onClick: function(ev) {
    console.log(ev);
  },
  render: function() {
    return (<a onCLick={this.onCLick}></a>);
  }
})
```

React has support for a bunch of DOM events. You can check them in the [React documentation](https://facebook.github.io/react/docs/events.html)

You can use the event pattern to communicate between Components. You just pass functions to other components:

```javascript
var HeyMachine = React.createClass({
  onCLick: function() {
    this.props.hey('HEY');
  },
  render: function() {
    return (<a onCLick={this.onCLick}></a>);
  }
});

var Hey = React.createClass({
  gotHey: function(msg) {
    window.alert(msg);
  },
  render: function() {
    return (<HeyMachine hey={this.gotHey}>);
  }
});
```

## Challenge!

 * Understand and play with the Book store example
 * Search and add the missing events
 * Understand the difference between DOM and Component events

### Resources

* [Event System](https://facebook.github.io/react/docs/events.html)
* [DOM Event Listeners in a Component](https://facebook.github.io/react/tips/dom-event-listeners.html)
* [Communicate Between Components](https://facebook.github.io/react/tips/communicate-between-components.html)