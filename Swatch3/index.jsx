import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Time from './components/Time';
import OffsetList from './components/OffsetList';
import SearchBar from './components/SearchBar';
// import ToggleDatePicker from './components/ToggleDatePicker';

class App extends Component {
  myUrl = 'https://5b5f35c58e9f160014b88dce.mockapi.io/api/eventDates'

  state = {
    currentTime: moment(),
    eventDates: [],
    inputDate: '',
    // delta: moment('17 August 2018').diff(moment()),
  }

  componentDidMount = () => {
    axios.get(this.myUrl)
      .then((res) => {
        console.log(res);
        this.setState({
          eventDates: res.data,
        });
      });
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: moment(),
      });
    }, 1000);
  }

  handleInputChange = (inputDate) => {
    console.log('Change');
    this.setState({
      inputDate,
    });
  }

  handleFormSubmit = () => {
    const { inputDate } = this.state;
    console.log('Form submitted', inputDate);
    // this.setState({
    //   inputDate: '',
    // });
  }

  render() {
    const { eventDates, currentTime, inputDate } = this.state;
    return (
      <div className="container text-center">
        {/* <ToggleDatePicker /> */}
        <SearchBar
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
          inputDate={inputDate}
        />
        <Time time={currentTime} message="Current time" />
        <OffsetList offsets={eventDates} current={currentTime} />
      </div>
    );
  }
}

export default App;
