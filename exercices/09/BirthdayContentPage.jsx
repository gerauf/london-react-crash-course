var React = require('react');

var GuestList = require('./GuestList.jsx');
var BirthdayInfo = require('./BirthdayInfo.jsx');

var BirthdayContentPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Birthday Party - HTML attributes!</h1>
        <BirthdayInfo/>
        <GuestList guestList={this.props.guestList} />
      </div>
    );
  }
});

module.exports = BirthdayContentPage;