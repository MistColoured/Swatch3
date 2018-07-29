import React, { Component } from 'react';
import moment from 'moment';
import Time from './components/Time';
import OffsetList from './components/OffsetList';
import ToggleDateInput from './components/ToggleDateInput';

class App extends Component {
  state = {
    currentTime: moment(),
    eventDates: [
      moment('17 Aug 2018'),
      moment('12 Aug 2018'),
      moment('25 Dec 2018'),
    ],
    // delta: moment('17 August 2018').diff(moment()),
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: moment(),
        // delta: this.getDelta(),
      });
    }, 1000);
  }

  render() {
    const { eventDates, currentTime } = this.state;
    return (
      <div className="container text-center">
        <Time time={currentTime} message="Current time" />
        <OffsetList offsets={eventDates} current={currentTime} />
        {/* <ToggleDateInput /> */}
      </div>
    );
  }
}

export default App;
