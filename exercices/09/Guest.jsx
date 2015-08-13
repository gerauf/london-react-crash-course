var React = require('react');

var style = require('./style.js');

var Guest = React.createClass({
  getInitialState: function() {
    return {
      checked: false,
      trStyle: style.notCheckedGuest
    };
  },
  handleChange: function() {
    var checked = !this.state.checked;
    this.setState({
      checked: checked,
      trStyle: checked ? style.checkedGuest : style.notCheckedGuest
    });
  },
  _onDelete: function() {
    this.props.onDelete(this.props.name);
  },
  render: function() {
    return (
      <tr style={this.state.trStyle}>
        <td style={style.tableContent}>
          <input checked={this.state.checked} onChange={this.handleChange} type='checkbox'/>
        </td>
        <td style={style.tableContent}>{this.props.name}</td>
        <td style={style.tableContent}>{this.props.children}</td>
        <td style={style.tableContent}>
          <button onClick={this._onDelete}>X</button>
        </td>
      </tr>
    );
  }
});

module.exports = Guest;