import React from 'react';

import GuestList from './GuestList.jsx';
import BirthdayInfo from './BirthdayInfo.jsx';

class BirthdayContentPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Birthday Party</h1>
        <BirthdayInfo/>
        <GuestList guestList={this.props.guestList} />
      </div>
    );
  }
};

export default class extends React.Component {
  render() {
    let guestList = [{
      name: 'First Person',
      brings: 'Champanhe'
    }, {
      name: 'Second Person',
      brings: 'Cake'
    }, {
      name: 'Third Person',
      brings: 'Beer'
    }];

    return (<BirthdayContentPage guestList={guestList} />)
  }
};
