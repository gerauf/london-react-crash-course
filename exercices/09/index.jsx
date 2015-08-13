var React = require('react');
var BirthdayContentPage = require('./BirthdayContentPage.jsx');

var guestList = [{
  name: 'Igor Suarez',
  brings: 'Champanhe'
}, {
  name: 'Sérgio Ramos',
  brings: 'Cake'
}, {
  name: 'Daniel Borges',
  brings: 'Beer'
}];

module.exports = React.createClass({
  render: function() {
    return (<BirthdayContentPage guestList={guestList} />);
  }
});