## Intro

If you remember the `BirthdayParty` exercise, you may have noticed that it has duplicated logic:

```js
class GuestList extends React.Component {
  ...,
  changeName(ev) {
    this.setState({
      guestName: ev.target.value
    });
  }
  changeBrings(ev) {
    this.setState({
      guestBrings: ev.target.value
    });
  }
  ...
};
```

`changeName` and `changeBrings` have the exact same implementation. A good way to solve this is by keeping track of both inputs and when a change occurs, get the value of both.

Remember how we can use `ReactDOM.findDOMNode(this)` to get the DOMNode of our component? Now, how would we access other components DOMNode? For that react has the concept of `refs`.

```js
class Checkboxes = React.Component {
  constructor(props) {
    super(props);
    this.state = {
      es6: true,
      node: true,
      react: false
    };
  }

  toggle() {
    console.log(Object.keys(this.refs));
  }
  render() {
    return (<div>
      <p><input ref='es6' checked={this.state.es6} onChange={this.toggle.bind(this)} type='checkbox' /></p>
      <p><input ref='node' checked={this.state.node} onChange={this.toggle.bind(this)} type='checkbox' /></p>
      <p><input ref='react' checked={this.state.react} onChange={this.toggle.bind(this)} type='checkbox' /></p>
    </div>);
  }
};
```

In this example, every time `toggle` is invoked it logs something like `['es6', 'node', 'react']`. Each `ref` is the current instance of the component it refers to. E.g. `this.react` will be an instance of the `<input>` component.

Having those references, you can use them to get the DOMNodes:

```
class Checkboxes = React.Component {
  ...,
  toggle() {
    let es6 = ReactDOM.findDOMNode(this.refs.es6);
    let isES6Checked = es6.checked;
  }
  ...
};
```

## Challenge!

Edit index.jsx so that:
  1. `changeName` event handler is shared between `first` and `last` `<input>`s;
  2. `first` and `last` `<input>`s have a `ref` attribute;

### Resources
  * [Working With the Browser](https://facebook.github.io/react/docs/working-with-the-browser.html)
  * [More About Refs](https://facebook.github.io/react/docs/more-about-refs.html)
  * [ReactDOM.findDOMNode](https://facebook.github.io/react/docs/top-level-api.html#react.finddomnode)
