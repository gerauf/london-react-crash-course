import React from 'react';
import ReactDOM from 'react-dom';
import buildArray from 'build-array';
import pad from 'pad';

import * as bootstrap from 'bootstrap-webpack';
import * as styles from './style.css';
import * as sh from './github.css';

import exercises from './.exercises.json';

class ExerciseList extends React.Component {
  render() {
    let links = Object.keys(exercises).sort(function(a, b) {
      return Number(a) - Number(b);
    }).map(function(id) {
      let href = '#' + id;
      return (<li key={id}>{id}: <a href={href} >{exercises[id].title}</a></li>);
    });

    return (<ul>{links}</ul>);
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    let ex = this.props.ex;
    this.state = {
      title: ex ? ex.title : 'Learn React',
      showBackButton: !!ex
    };
  }

  render() {
    let backButton = this.state.showBackButton ? (
      <a href='#' className='go-back'>
        <span className='glyphicon glyphicon-triangle-left' aria-hidden='true'></span>
        Back
      </a>
    ) : null;
    return (
      <div className='header'>
        <div className='container'>
          <div className='row'>
            {backButton}
            <img
              className='logo'
              src={require('file!../images/yld.png')}
              alt='YLD' />
            <h1>{this.state.title}</h1>
          </div>
        </div>
      </div>
    );
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    let ex = this.props.ex;
    this.state = {
      component: ex ? require('./' + ex.slug + '/index.jsx') : ExerciseList,
      title: ex ? ex.title : 'Select your exercice:'
    };
  }

  componentDidMount() {
    let container = ReactDOM.findDOMNode(this.refs.container);
    try {
      // console.log(this.props);
      // console.log(this.state.component);
      let element = React.createElement(this.state.component);
      ReactDOM.render(element, container);
    } catch (error) {
      let text = error.toString() + '\n' + error.stack;
      let element = React.createElement('pre', {}, text);
      ReactDOM.render(element, container);
    }
  }

  render() {
    let editor = (function(ex) {
      if (!ex) return null;
      return (<p>
        Use your text editor of choice to edit the files in <span className='monospace'>exercises/{ex.slug}/</span>.
        <br /> The result will be rendered below:
      </p>);
    })(this.props.ex);

    return (
      <div className='main'>
        <div className='container'>
          <div className='row'>
            <h4>{this.state.title}</h4>
            {editor}
            <div ref='container' className='component'></div>
          </div>
        </div>
      </div>
    );
  }
};

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    let ex = this.props.ex;

    this.state = {
      content: ex ? require('./' + ex.slug + '/readme.md') : require('./readme.md')
    };
  }

  render() {
    let text = React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: this.state.content
      }
    });

    return (
      <div className='instructions'>
        <div className='container'>
          <div className='row md'>
            {text}
          </div>
        </div>
      </div>
    );
  }
};

class Page extends React.Component {
  render() {
    let ex = this.props.ex;
    let key = ex ? ex.slug : 'main';
    //console.log('rendering page');

    return (
      <div>
        <Header key={'h' + key} ex={this.props.ex}/>
        <Instructions key={'i' + key} ex={this.props.ex} />
        <Main key={'m' + key} ex={this.props.ex} />
        <div className='footer'>© YLD! Limited 2016</div>
      </div>
    );
  }
};

let onHashChange = function() {
  let hash = window.location.hash.replace(/^\#/, '');
  let ex = exercises[hash];
  ReactDOM.render((<Page ex={ex} />), document.getElementById('root'));
};

window.onhashchange = onHashChange;

onHashChange();
