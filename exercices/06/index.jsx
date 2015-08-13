var React = require('react');
var timediff = require('timediff');
var raf = require('component-raf');

var Display = React.createClass({
  propTypes: {
    s: React.PropTypes.number.isRequired,
    ms: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {
      showColon: true
    };
  },
  render: function() {
    var colon = this.state.showColon ? ':' : ' ';
    return (<span>
      {this.props.s}{colon}{this.props.ms}
    </span>);
  }
});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      s: 0,
      ms: 0,
      start: new Date()
    };
  },
  tick: function() {
    var diff = timediff(this.state.start, new Date());
    this.setState({
      ms: diff.milliseconds,
      s: diff.seconds
    });
  },
  tock: function() {
    this.tick();
    raf(this.tock);
  },
  componentDidMount: function() {
    this.tock();
  },
  reset: function() {
    this.setState({
      start: new Date()
    });
  },
  render: function() {
    return (<div>
      <span>Elapsed time: </span><Display s={this.state.s} ms={this.state.ms} />
      <br />
      <button onClick={this.reset}>Reset</button>
    </div>);
  }
});