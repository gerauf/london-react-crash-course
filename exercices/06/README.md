## Challenge!

  1. Use `componentWillReceiveProps` in the `Display` component to define `showColon`. Idea: only show colon when `ms > 500`;
  2. Use `shouldComponentUpdate` to decide whether it should render. Idea: only render when `(ms % 5) === 0`
  3. Use `componentWillUpdate` to update state somehow. Observe the results.
  4. componentDidUpdate // TODO

### Resources

 * [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)