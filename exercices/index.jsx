var React = require('react');
var buildArray = require('build-array');
var pad = require('pad');

require('bootstrap-webpack');
require('../style.scss');

var ExerciseList = React.createClass({
  render: function() {
    var links = buildArray(10)
      .map(function(n, i) {
        var ex = pad(2, String(i + 1), '0');
        var href = '#' + ex;
        return (<li><a href={href} >{ex}</a></li>);
      });

    return (<ul> {links} </ul>);
  }
});

var Header = React.createClass({
  getInitialState: function() {
    var ex = this.props.ex;
    return {
      title: ex || 'Learn React',
      showBackButton: !!ex
    };
  },
  render: function() {
    var backButton = this.state.showBackButton ? (
      <a href="#" className="go-back">
        <span className="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
        Back
      </a>
    ) : null;
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            {backButton}
            <img
              className="logo"
              src={require('file!../images/yld.png')}
              alt="YLD" />
            <h1>{this.state.title}</h1>
          </div>
        </div>
      </div>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    var ex = this.props.ex;
    return {
      component: ex ? require('./' + ex + '/index.jsx') : ExerciseList,
      header: ex ? 'Your component' : ''
    };
  },
  componentDidMount: function() {
    var container = React.findDOMNode(this.refs.container);
    try {
      var element = React.createElement(this.state.component, {}, 'hello');
      React.render(element, container);
    } catch (error) {
      var text = error.toString() + '\n' + error.stack;
      var element = React.createElement('pre', {}, text);
      React.render(element, container);
    }
  },
  render: function() {
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <h4>{this.state.header}</h4>
            <div ref="container" className="component"></div>
          </div>
        </div>
      </div>
    );
  }
});

var Instructions = React.createClass({
  getInitialState: function() {
    var ex = this.props.ex;
    return {
      content: ex ? require('./' + ex + '/README.md') : require('./README.md')
    };
  },
  render: function() {
    var attr = { dangerouslySetInnerHTML: { __html: this.state.content } };
    var text = React.createElement('div', attr);
    return (
      <div className="instructions">
        <div className="container">
          <div className="row md">
            {text}
          </div>
        </div>
      </div>
    );
  }
});

var Page = React.createClass({
  render: function() {
    console.log('rendering page')
    return (
      <div>
        <Header key={'h' + this.props.ex} ex={this.props.ex}/>
        <Instructions key={'i' + this.props.ex} ex={this.props.ex} />
        <Main key={'m' + this.props.ex} ex={this.props.ex} />
        <div className="footer">© YLD! Limited 2015</div>
      </div>
    );
  }
});

var onHashChange = function() {
  var ex = window.location.hash.replace(/^\#/, '');
  React.render((<Page ex={ex} />), document.body);
};

window.onhashchange = onHashChange;

onHashChange();
