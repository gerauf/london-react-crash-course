var React = require('react');

var Display = React.createClass({
  propTypes: {
    count: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {
      count: 0
    };
  },
  tick: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 100);
  },
  render: function() {
    return (<span>
      Own count: {this.state.count}<br />
      Parent count: {this.props.count}
    </span>);
  }
});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      show: false
    };
  },
  tick: function() {
    this.setState({
      count: this.state.count + 1,
      show: !this.state.show
    });
  },
  componentDidMount: function() {
    setInterval(this.tick, 1000);
  },
  render: function() {
    var display = this.state.show ? (<Display count={this.state.count} />) : '';
    return (<div>{display}</div>);
  }
});